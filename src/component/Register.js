import React from "react";
import "./Register.css";



class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      comfirmpassword: "",
    }
  }
  // handleChange = (event) => {
  //   const name = event.target.name;
  //      const value = event.target.value

  //   this.setState(
  //     {
  //       [name]:value
  //     });
  //     console.log(this.state);
  // }
  handleChange = (event) => {
    
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }
 handleSubmit = (e) => {
    e.preventDefault();//ko cho trang ko bi loading lai
   console.log(this.state.email, this.state.password,this.state.cfmpass);
  }
  hanndleAdd(item) {
  }
  render() {
    return (
      <div className="register">
        <div className="ctn-btn">
          <form onSubmit={this.handleSubmit}>
            <div className="Rigister-content row"></div>
            <h1>ACCount Register</h1>
            <div className="email">
              <label>Eamil</label>
              <input value={this.state.email}
                id="email" placeholder="eamil"
                type="text" name="email"
                onChange={this.handleChange} />
            </div>
            <div className="password">
              <label>Password</label>
              <input value={this.state.password}
                id="password" placeholder="Password"
                type="password" name="password"
                onChange={this.handleChange} />
            </div>
            <div className="comfirmpassword">
              <lable>Comfirm password </lable><br />
              <input
               value={this.state.comfirmpassword}
                id="comfirmpassword" placeholder="comfirmpassword"
                type="password" name="comfirmpassword"
                onChange={this.handleChange} />
            </div>
            <button className="button" type="submit" onClick={this.hanndleAdd}>Register</button>
          </form>
        </div>

      </div>
    );
  }
}

export default Register;
