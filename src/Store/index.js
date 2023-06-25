import { createStore, combineReducers } from "redux";
import studentReducer from "../reducer/studentReducer";
import formReducer from "../reducer/formReducer";

const reducers = combineReducers({
    studentReducer,
    formReducer
})

const store = createStore(reducers)

export default store
