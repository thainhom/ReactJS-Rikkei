import React from "react";
import Shopping from "./components/shopping";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import CarShopping from "./components/carShopping"
class App extends React.Component {
  render() {
    return (
      <div>
        <Shopping />
        <CarShopping />
      </div>
    );
  }
}

export default App;
