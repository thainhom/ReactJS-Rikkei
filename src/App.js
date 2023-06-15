import React from "react";
import { Link, Route, Routes, } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import User from "./components/User"
import Contact from "./components/Contact"

import { Outlet } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div className=" AppComponent">
        <button>
          <Link to="/">Home</Link>
        </button>{" "}
        <button>
          <Link to="/about">About</Link>
        </button>{" "}
        <button>
          <Link to="/User">User</Link>
        </button>{" "}
        <button>
          <Link to="/Contact ">Contact</Link>
        </button>


        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/About" element={<About />} />
          <Route path="User" element={<User />} />
          <Route path="Contact" element={<Contact />} />


        </Routes>
      </div>
    );
  }
}

export default App;
