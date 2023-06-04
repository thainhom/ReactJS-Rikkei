import { toHaveAccessibleName } from "@testing-library/jest-dom/matchers";
import React from "react"
import Register from "./component/Register"
import "./App.css"
class App extends React.Component {
 
  
  render() {

    return (
     <div className="Register">
        <Register/>
      
     </div>
   
    );
  }
}

export default App;
