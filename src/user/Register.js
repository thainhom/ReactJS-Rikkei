import "./Register.css";
import { useState } from "react";

function Register() {

    const [username, SetUsername] = useState()
    const [email, SetEmail] = useState()
    const [password, SetPassword] = useState()
    const [confirmpassword, SetConfirmPassword] = useState()
    const [isRegister, SetIsRegister] = useState(false)
    const listRegister = JSON.parse(localStorage.getItem("user")) ?? [];
    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === username) {
            SetUsername(value)
        } else if (name === email) {
            SetEmail(value)
        } else if (name === password) {
            SetPassword(value)
        } else if (name === confirmpassword) {
            SetConfirmPassword(value)
        }
        console.log(111111, name, value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        for (let i = 0; i < listRegister.length; i++) {
            if (listRegister[i].username === username || listRegister[i].email === email) {
                alert("Tên Hoặc email đã tồn tại xìn mời bạn nhập lại")
                return

            }

        }
        const newUser = {
            username,
            email,
            password,
        }
        const listRegister = [...listRegister, newUser];
        localStorage.setItem("user", JSON.stringify(listRegister));
        SetUsername("");
        SetEmail("");
        SetPassword("");
        SetConfirmPassword("");
        SetIsRegister(true);
    }

    return (
        <>
            <div className="login-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">

                        <input
                            value={username}
                            onChange={handleChange} type="text" name="username" required="" />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input
                            value={email}
                            onChange={handleChange} type="text" name="email" required="" />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input
                            value={password}
                            onChange={handleChange} type="password" name="password" required="" />
                        <label>Password</label>
                    </div>
                    <div className="user-box">
                        <input
                            value={confirmpassword}
                            onChange={handleChange} type="password" name="confirm Password" required="" />
                        <label>Confirm Password </label>
                    </div>
                    <button

                        type="submit">
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </a></button>
                    <button>
                        <a href="/login">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            LOGIN
                        </a></button>
                </form>
            </div>

        </>

    )
}
export default Register

