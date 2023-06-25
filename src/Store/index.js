import { createStore, combineReducers } from "redux";
import cartReducer from "../reducer/formReducer";
import productReducer from "../reducer/studentReducer";

const reducers = combineReducers({
    cartReducer,
    productReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
