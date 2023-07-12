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
console.log("cart1", cart);

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
            userId: userLogin.userId,
            orderAt: moment().format('YYYY-MM-DD HH:mm:ss'),
            total: calculateTotal(state.cart),
            status: 1,
            note: action.payload.note,
            orderDetails: state.cart,
            createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
            createdBy: userLogin.userId,
            updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
            updatedBy: userLogin.userId,
        }

        window.localStorage.setItem('orders', JSON.stringify([...orders, newOrder]))
        window.localStorage.removeItem('cart')

        return {
            cart: [],
            numberOfItems: 0,
            total: 0
        }
    },
    DELETE_FROM_CART: (state, aciton) => {
        const idFromCart = aciton.payload
        state.cart = state.cart.filter(c => c.id !== idFromCart)


    },
    ADD_ORDER: (state, aciton) => {
        const addOrder = window.localStorage.getItem('orders') ? JSON.parse(window.localStorage.getItem('orders')) : [];
        const neworder = [...addOrder, aciton.payload]
        window.localStorage.setItem('orders', JSON.stringify([...addOrder, neworder]))


    },
    ADD_USER: (state, aciton) => {
        const addUser = window.localStorage.getItem('users') ? JSON.parse(window.localStorage.getItem('users')) : [];
        const newuser = [...addUser, aciton.payload]
        window.localStorage.setItem('users', JSON.stringify([...addUser, newuser]))
    },
    EDIT_USER: (state, action) => {
        const users = window.localStorage.getItem('users') ? JSON.parse(window.localStorage.getItem('users')) : [];
        const userLogin = JSON.parse(localStorage.getItem("userLogin"));
        const updateUser = users.map(user => {
            if (user.userId === action.payload.userId) {
                user.username = action.payload.username;
                user.role = action.payload.role;
                user.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss');
                user.updatedBy = userLogin.userId

                if (action.payload.password) {
                    user.password = action.payload.password;
                }
            }

            return user;
        })
        localStorage.setItem('users', JSON.stringify(updateUser))

    }
})

export default cartReducer
