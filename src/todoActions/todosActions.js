/** tk này khai báo chờ xử lý bên phần counts
 * 
 */




export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}
export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}
export const updateTodo = (index, title, completed) => {
    return {
        type: 'UPDATE_TODO',
        payload: { index, title, completed }
    }
}
