/** Th bên này là khai báo state hoặc cái function đê mỗi lần các component thực thi truyên lên store 
 * để khai báo lại state 
 * 
 */

const initState = {
    count: 0,
    // todos:[  ]
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "UP_COUNT":


            return {
                count: state.count + action.payload
            }
        case "DOWN_COUNT":

            return {
                count: state.count - action.payload
            }
        default:
            return state
    }

}
export default reducer