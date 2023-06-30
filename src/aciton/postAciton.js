import { createAction } from "@reduxjs/toolkit";
const getPostList = createAction("GET_POST")
const changlanguages = createAction("CHANG_LANGUAGE")

export { getPostList, changlanguages }
