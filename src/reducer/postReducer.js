import { createReducer } from "@reduxjs/toolkit"

const postReducer = createReducer({ post: [] }, {
    GET_POST: (state, action) => {
        debugger
        return {
            ...state,
            post: action.paylod

        }

    }

})
export default postReducer