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
import ManagerOrders from "./admin/homeAdmin/home/managerOrders";
import ManagerProduct from "./admin/homeAdmin/home/managerProduct";
import ManagerUser from "./admin/homeAdmin/home/managerUser";
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
        <Route path="/adminOrder" element={<ManagerOrders />} />
        <Route path="/adminProduct" element={<ManagerProduct />} />
        <Route path="/adminUsers" element={<ManagerUser />} />

      </Routes>


    </>
  )
}
export default App