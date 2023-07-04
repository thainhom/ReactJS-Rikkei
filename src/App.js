import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Cart from "./user/pages/Cart";
// import Home from "./user/pages/Home";

import { Routes, Route } from "react-router-dom";
// import LoginAdmin from "./admin/login/LoginAdmin"
import Register from "./user/Register"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>


    </>
  )
}
export default App