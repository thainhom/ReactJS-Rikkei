import { createAction } from "@reduxjs/toolkit";
const addToCart = createAction("ADD_TO_CART");
const changeQuantity = createAction("CHANGE_Quantity");
const checkout = createAction("CHECKOUT");
const deleteFromCart = createAction("DELETE_FROM_CART");
const addOrder = createAction("ADD_ORDER");
const addProduct = createAction("ADD_PRODUCT");
const deleteProduct = createAction("DELETE_PRODUCT");
const editProduct = createAction("EDIT_PRODUCT");
const editUser = createAction("EDIT_USER");
const addUser = createAction("ADD_USER");
export { addToCart, addProduct, deleteProduct, changeQuantity, deleteFromCart, checkout, editProduct, addOrder, editUser }
