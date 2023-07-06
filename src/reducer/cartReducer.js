import { createReducer } from "@reduxjs/toolkit"

const initState = {
    cart: [],
    numberOfItems: 0,
    total: 0
}



const cartReducer = createReducer(initState, {
    ADD_TO_CART: (state, action) => {
        console.log(111111, state);
        console.log(111111, state.product, state.cart);
        let cart = []
        let isExist = false
        cart = state.cart.map(item => {
            if (item.id === action.payload.id) {
                isExist = true
                item.quantity = item.quantity + action.payload.quantity
                item.subTotal = item.unitPrice * item.quantity
            }

            // return item
        })

        if (!isExist) {
            cart = [...cart, { ...action.payload, subTotal: action.payload.unitPrice * action.payload.quantity }]
        }

        
        state.cart = cart


    },
    CHANGE_Quantity: (state, action) => {
        console.log(333333333);
        const cart = state.cart.map(item => {
            if (item.id === action.payload) {
                item.quantity = action.payload.quantity
                item.subTotal = item.unitPrice * item.quantity
            }


        })

        let total = 0;
        for (let item of cart) {
            total = total + item.subTotal
        }

        return {
            cart: cart,
            numberOfItems: cart.length,
            total: total
        }
    }


})
export default cartReducer


// import { createSlice } from '@reduxjs/toolkit';

// const cartReducer = createSlice({
//     name: 'cart',
//     initialState: [],
//     reducers: {
//        addToCart: (state, action) => {
//                     console.log(111111, state);
//                     console.log(111111, state.product, state.cart);
//                     let cart = []
//                     let isExist = false
//                     cart = state.cart.map(item => {
//                         if (item.id === action.payload.id) {
//                             isExist = true
//                             item.quantity = item.quantity + action.payload.quantity
//                             item.subTotal = item.unitPrice * item.quantity
//                         }
            
//                         // return item
//                     })
            
//                     if (!isExist) {
//                         cart = [...cart, { ...action.payload, subTotal: action.payload.unitPrice * action.payload.quantity }]
//                     }
            
//                     console.log(44444444, cart);
//                     state.cart = cart
            
            
//                 }
//     },
// });

// export const { addToCart } = cartReducer.actions;
// export default cartReducer.reducer;