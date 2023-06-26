export const addStudent = (data) => {
    console.log(data);
    return {
        type: 'ADD_TO_CART',
        payload: data


    }
}

export const deleteStudent = (id) => {
    return {
        type: 'DELETE_STUDENT',
        payload: { id }
    }
}


export const updateStudent = (id) => {
    return {
        type: 'UPDATE_STUDENT',
        payload: id
    }
}
