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