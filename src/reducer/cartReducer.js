import { createReducer } from "@reduxjs/toolkit"

const cartReducer = createReducer({ cart: [], numberOfItems: 0, total: 0 }, {

    GET_POST: (state, action) => {

        return {
            ...state,
            post: action.payload
        }

    },
    ADD_TO_CART: (state, action) => {
        let cart = []
        let isExist = false
        cart = state.cart.map(item => {
            if (item.id === action.payload.id) {
                isExist = true
                item.quantity = item.quantity + action.payload.quantity
                item.subTotal = item.unitPrice * item.quantity
            }

            return item
        })

        if (!isExist) {
            cart = [...cart, { ...action.payload, subTotal: action.payload.unitPrice * action.payload.quantity }]
        }


    },
    CHANGE_Quantity: (state, action) =>{
        
    }

})
export default cartReducer