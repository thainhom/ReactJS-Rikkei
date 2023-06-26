import { createStore, combineReducers } from "redux";
import studentReducer from "../reducer/studentReducer";
import formReducer from "../reducer/NavbarReducer";

const reducers = combineReducers({
    studentReducer,
    formReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
