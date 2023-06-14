import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Product from "./components/Product"
import AboutRikei from "./components/AboutRikei"
import AboutRikeiS from "./components/AboutRikeiS"
class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/About" element={<About />} >
          <Route path="/AboutRikie" element={<AboutRikei />} />
          <Route path="/AboutRikeiS" element={<AboutRikeiS />} />
        </Route>
        <Route path="/Product" element={<Product />} />
      </Routes>
    );
  }
}

export default App;
