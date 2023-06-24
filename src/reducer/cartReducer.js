const initState = {
    cart: [],
    numberOfItems: 0,
    total: 0
}

const cartReducer = (state = initState, action) => {

    let cart = []
    switch (action.type) {
        case 'ADD_TO_CART':
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

            break;
        case 'DELETE_FROM_CART':
            cart = state.cart.filter(item => item.id !== action.payload)
            break
        case 'CHANGE_QUANTITY':
            cart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    item.quantity = action.payload.quantity
                    item.subTotal = item.unitPrice * item.quantity
                }

                return item
            })
            break
        default:
            break;
    }

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

export default cartReducer
