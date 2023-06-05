import { toHaveAccessibleName } from "@testing-library/jest-dom/matchers";
import React from "react"
import Register from "./component/Register"
import "./App.css"
import Login from "./component/Login";
class App extends React.Component {
 
  
  render() {

    return (
     <div className="Register">
        <Register/>
        <Login />
      
     </div>
   
    );
  }
}

export default App;
