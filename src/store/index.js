import productReducer from "../reducer/productReducer"
import cartReducer from "../reducer/cartReducer"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
let reducer = combineReducers({
    productReducer: productReducer,
    cartReducer: cartReducer
})
const store = configureStore({

    reducer: reducer
});


export default store