import { createReducer } from "@reduxjs/toolkit"

const postReducer = createReducer({ post: [] }, {
    GET_POST: (state, action) => {
        return {
            ...state,
            post: action.payload
        }

    },
    CHANG_LANGUAGE: (state, action) => {
        return {
            ...state,
            language: action.payload
        }
    }

})
export default postReducer