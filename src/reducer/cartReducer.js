import { createReducer } from "@reduxjs/toolkit"
import moment from "moment/moment";
import getNextId from "../utilities/getNextId";
import { deleteFromCart } from "../aciton/shoppingCart";

const calculateTotal = (cart) => {
    let total = 0;

    for (let item of cart) {
        total += item.subTotal;
    }

    return total;
}

const getCartFromLocalStorage = () => {
    return window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : []
}

const cart = getCartFromLocalStorage();


const initState = {
    cart: cart,
    numberOfItems: cart.length,
    total: calculateTotal(cart)
}

const cartReducer = createReducer(initState, {
    ADD_TO_CART: (state, action) => {
        let isExist = false
        let cart = state.cart.map(item => {
            if (item.id === action.payload.id) {
                isExist = true
                const quantity = item.quantity + action.payload.quantity

                return {
                    ...item,
                    quantity: quantity,
                    subTotal: item.unitPrice * quantity
                }
            }

            return item
        })

        if (!isExist) {
            cart = [...cart, { ...action.payload, quantity: action.payload.quantity, subTotal: action.payload.unitPrice * action.payload.quantity }]
        }

        return {
            cart: cart,
            numberOfItems: cart.length,
            total: calculateTotal(cart)
        }
    },
    CHANGE_Quantity: (state, action) => {
        const cart = state.cart.map(item => {
            if (item.id === action.payload) {
                item.quantity = action.payload.quantity
                item.subTotal = item.unitPrice * item.quantity
            }
        })

        return {
            cart: cart,
            numberOfItems: cart.length,
            total: calculateTotal(cart)
        }
    },
    CHECKOUT: (state, action) => {
        const orders = window.localStorage.getItem('orders') ? JSON.parse(window.localStorage.getItem('orders')) : [];

        const userLogin = JSON.parse(localStorage.getItem("userLogin"));
        const newOrder = {
            orderId: getNextId(orders, 'orderId'),
            serialNumber: getNextId(orders),
            user_id: userLogin.user_id,
            orderAt: moment().format('YYYY-MM-DD HH:mm:ss'),
            total: calculateTotal(state.cart),
            status: "Đơn hàng mới",
            note: action.payload.note,
            orderDetails: state.cart,
            created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            createdBy: userLogin.user_id,
            updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            updated_by_id: userLogin.user_id,
        }

        window.localStorage.setItem('orders', JSON.stringify([...orders, newOrder]))
        window.localStorage.removeItem('cart')

        return {
            cart: [],
            numberOfItems: 0,
            total: 0
        }
    },
    DELETE_FROM_CART: (state, action) => {
        const idFromCart = action.payload
        state.cart = state.cart.filter(c => c.id !== idFromCart)


    },
    ADD_ORDER: (state, action) => {
        const addOrder = window.localStorage.getItem('orders') ? JSON.parse(window.localStorage.getItem('orders')) : [];
        const neworder = [...addOrder, action.payload]
        window.localStorage.setItem('orders', JSON.stringify([...addOrder, neworder]))



    },
    DELETE_ORDER: (state, action) => {
        const deleteOrder = window.localStorage.getItem('orders') ? JSON.parse(window.localStorage.getItem("orders")) : []
        const idOrder = action.payload
        const updateOrder = deleteOrder.filter(x => x.orderId !== idOrder)
        localStorage.setItem('orders', JSON.stringify(updateOrder))
        return { ...state }


    },
    ADD_USER: (state, action) => {

        const addUser = window.localStorage.getItem('users') ? JSON.parse(window.localStorage.getItem('users')) : [];
        const newuser = [...addUser, { ...action.payload, user_id: getNextId(addUser, "user_id") }]
        localStorage.setItem('users', JSON.stringify([...newuser]))
        console.log(JSON.stringify([...newuser]))
        return { ...state }

    },
    EDIT_USER: (state, action) => {
        const users = window.localStorage.getItem('users') ? JSON.parse(window.localStorage.getItem('users')) : [];
        const userLogin = JSON.parse(localStorage.getItem("userLogin"));
        const updateUser = users.map(user => {
            if (user.user_id === action.payload.user_id) {
                user.username = action.payload.username;
                user.role = action.payload.role;
                user.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');
                user.updated_by_id = userLogin.user_id

                if (action.payload.password) {
                    user.password = action.payload.password;
                }
            }

            return user;
        })
        localStorage.setItem('users', JSON.stringify(updateUser))

    },
    DELETE_USER: (state, action) => {
        const users = window.localStorage.getItem('users') ? JSON.parse(window.localStorage.getItem('users')) : [];
        const deleteUser = action.payload
        const newUsers = users.filter(item => item.user_id !== deleteUser)
        localStorage.setItem('users', JSON.stringify(newUsers))
        console.log("delete", newUsers);
        return { ...state }
    }


})

export default cartReducer
