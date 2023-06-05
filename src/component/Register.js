import React from "react";
import "./Register.css";



class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      //co 1 khoi co de qua ly khi co nhieu khoi form
      form: {
        email: "",
        password: "",
        comfirmpassword: ""
      },
// cho error rong
      error: {},

    }
  }
  // cach lay gia tri khac neu muon lam
  // handleChange = (event) => {
  //   const name = event.target.name;
  //      const value = event.target.value


  //   this.setState(
  //     {
  //       [name]:value
  //     });
  //     console.log(this.state);
  // }
  // handleChange = (event) => {

  //   this.setState({ [event.target.name]: event.target.value });

  // }
  handleChange = (e) => {
   // copy tk form ow tren state
    const data = { ...this.state.form }
 //lay gia tri cua input nho phai bo trong []
    data[e.target.name] = e.target.value
// gan data lai cho tk form de setState
    this.setState({
      form: data,

    })


  }

  handleSubmit = (e) => {
    e.preventDefault();//ko cho trang ko bi loading lai
    const { email, password, comfirmpassword } = this.state.form
    const error = {};// bien chua cac error
    if (typeof email === "string" && email.trim() === "") {//loai bo cac khoan trong 
      error.email = "email khong duoc de trong"
    }
    if (typeof password === "string" && password.trim() === "") {
      error.password = "password khong duoc de trong"
    }
    if (typeof comfirmpassword === "string" && comfirmpassword.trim() === "") {
      error.comfirmpassword = "comfirmpassword khong duoc de trong"
    }
    //set laij error
    this.setState({ error: error })
    console.log(error);
  };








  render() {
    //render lai form, error
    const { form, error } = this.state;
    console.log(error);
    return (
      <div className="register">
      
          {/* {Object.keys(error).length > 0}{alert("vui long ktr du lieu cua ban")} */}
          
        <div className="ctn-btn">
          <h1>ACCount Register</h1>
         
          <form onSubmit={this.handleSubmit}>
        
            <div className="email">
              <label>Eamil</label>
              <input 
              // value={this.state.email}
             
                id="email" placeholder="eamil"
                type="text" name="email"
                onChange={this.handleChange} />
                {/* in error ra element */}
              {error.email && <span className="error">{error.email}</span>}
              
            </div>
            <div className="password">
              <label>Password</label>
              <input 
              // value={this.state.password}
                id="password" placeholder="Password"
                type="password" name="password"
                onChange={this.handleChange} />
                 {/* in error ra element */}
               {error.password && <span className="error">{error.password}</span>}
            </div>
            <div className="comfirmpassword">
            <label>comfirmpassword</label>
              <input
                // value={this.state.comfirmpassword}
                id="comfirmpassword" placeholder="comfirmpassword"
                type="password" name="comfirmpassword"
                onChange={this.handleChange} />
                 {/* in error ra element */}
               {error.comfirmpassword && <span className="error">{error.comfirmpassword}</span>}
            </div>
            <button className="button" type="submit" onClick={this.hanndleAdd}>Register</button>
          </form>
        </div>

      </div>
    );
  }
}

export default Register;
