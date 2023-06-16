/** tk store này tạo ra đê khai báo cho tk index.js
 * 
 */

import { createStore } from "redux";
import reducer from "../Reducer/Countreducer";


const countStore=createStore(reducer) 


export default countStore