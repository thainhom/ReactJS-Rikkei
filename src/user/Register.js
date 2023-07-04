import "./Register.css";
import { useState } from "react";

function Register() {
    const [username, SetUsername] = useState()
    const [email, SetEmail] = useState()
    const [password, SetPassword] = useState()
    const [confirmpassword, SetConfirmPassword] = useState()
    const listRegister = JSON.parse(localStorage.getItem("register")) ?? [];
    const handleChange = (e) => {
        const value = e.target.value;
        SetUsername(value)

    }
    const handleChange1 = (e) => {
        const value = e.target.value;
        SetValueInput(value)

    }
    const handleChange2 = (e) => {
        const value = e.target.value;
        SetValueInput(value)

    }
    const handleChange3 = (e) => {
        const value = e.target.value;
        SetValueInput(value)

    }

    return (
        <>
            <div className="login-box">
                <h2>Register</h2>
                <form>
                    <div className="user-box">

                        <input
                            value={valueInput.name}
                            onChange={(e) => handleChange(e)} type="text" name="" required="" />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input
                            value={valueInput.email}
                            onChange={(e) => handleChange1(e)} type="text" name="" required="" />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input
                            value={valueInput.password}
                            onChange={(e) => handleChange2(e)} type="password" name="" required="" />
                        <label>Password</label>
                    </div>
                    <div className="user-box">
                        <input
                            value={valueInput.confi}
                            onChange={(e) => handleChange3(e)} type="password" name="" required="" />
                        <label>confirm Password </label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                    <a href="/login">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Login
                    </a>
                </form>
            </div>

        </>

    )
}
export default Register


