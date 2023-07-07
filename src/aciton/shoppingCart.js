import { createAction } from "@reduxjs/toolkit";
const addToCart = createAction("ADD_TO_CART");
const changeQuantity = createAction("CHANGE_Quantity");
const checkout = createAction("CHECKOUT");
const deleteFromCart = createAction("DELETE_FROM_CART");
const addProduct = createAction("ADD_PRODUCT");
const deleteProduct = createAction("DELETE_PRODUCT");
export { addToCart, addProduct, deleteProduct, changeQuantity, deleteFromCart, checkout }
