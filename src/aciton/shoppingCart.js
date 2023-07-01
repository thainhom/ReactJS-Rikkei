import { createAction } from "@reduxjs/toolkit";
const addToCart = createAction("ADD_TO_CART");
const addProduct = createAction("ADD_PRODUCT");
export { addToCart, addProduct }
