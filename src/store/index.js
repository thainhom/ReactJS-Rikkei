import postReducer from "../reducer/postReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: postReducer
})


export default store