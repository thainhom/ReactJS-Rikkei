/** tk store này tạo ra đê khai báo cho tk index.js
 * 
 */

import { createStore } from "redux";
import reducer from "../shoppingReducer/shoppingReducer";


const shoppingStore=createStore(reducer) 


export default shoppingStore