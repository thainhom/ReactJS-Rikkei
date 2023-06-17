/** tk store này tạo ra đê khai báo cho tk index.js
 * 
 */

import { createStore } from "redux";
import reducer from "../todoReducer/todoDucer";


const todoStore=createStore(reducer) 


export default todoStore