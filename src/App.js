import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./user/loginUser"
import Cart from "./user/pages/Cart";
import { Routes, Route } from "react-router-dom";
// import LoginAdmin from "./admin/login/LoginAdmin"
import Register from "./user/Register"
import Home from "./user/pages/Home";
import LoginAdmin from "./admin/login/LoginAdmin";
import HomeAdmin from "./admin/homeAdmin/HomeAdmin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/homeAdmin" element={<HomeAdmin />} />
      </Routes>


    </>
  )
}
export default App