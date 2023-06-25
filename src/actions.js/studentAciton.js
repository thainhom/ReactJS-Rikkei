export const addStudent = (id) => {
    return {
        type: 'ADD_TO_CART',
        payload: id,


    }
}

export const deleteStudent = (id) => {
    return {
        type: 'DELETE_STUDENT',
        payload: id
    }
}


export const changeQuantityStudent = (id,) => {
    return {
        type: 'CHANGE_QUANTITY',
        payload: {
            id: id,

        }
    }
}
