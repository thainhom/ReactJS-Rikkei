export const addStudent = (product, quantity) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            ...product,
            quantity
        }
    }
}

export const deleteStudent = (id) => {
    return {
        type: 'DELETE_FROM_CART',
        payload: id
    }
}


export const changeQuantityStudent = (id, quantity) => {
    return {
        type: 'CHANGE_QUANTITY',
        payload: {
            id: id,
            quantity: quantity
        }
    }
}
