import React from "react";
import { Link, Route, Routes, } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Product from "./components/Product"
import AboutRikei from "./components/AboutRikei"
import AboutRikeiS from "./components/AboutRikeiS"
import { Outlet } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div className=" AppComponent">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Product">Product</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/About" element={<About />} >
            <Route path="AboutRikei" element={<AboutRikei />} />
            <Route path="AboutRikeiS" element={<AboutRikeiS />} />
          </Route>
          <Route path="/Product" element={<Product />} />
        </Routes>
      </div>
    );
  }
}

export default App;
