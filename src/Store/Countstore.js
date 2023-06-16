import { createStore } from "redux";
import reducer from "../Reducer/Countreducer";


const countStore=createStore(reducer) 


export default countStore