import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>


    </>
  )
}
export default App