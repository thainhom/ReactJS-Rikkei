/** tk này khai báo chờ xử lý bên phần counts
 * 
 */




export const addShopping = (shopping) => {
    return {
        type: 'ADD_SHOP',
        payload: shopping
    }
}
export const deleteShopping = (id) => {
    return {
        type: 'DELETE_SHOP',
        payload: id
    }
}
export const updateShopping = (id, quantity) => {
    return {
        type: 'UPDATE_SHOP',
        payload: { id, quantity }
    }
}
