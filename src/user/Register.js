import "./Register.css";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorUsername, setErrorUsername] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    ////////////////////////////////////////////////////////////////
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(window.localStorage.getItem("users") ? JSON.parse(window.localStorage.getItem("users")) : [])
    }, [])

    const handleChange = async (e) => {
        const { name, value } = e.target
        if (name === 'username') {
            await setUsername(value)
        } else if (name === 'email') {
            await setEmail(value)
        } else if (name === 'password') {
            await setPassword(value)
        } else if (name === 'confirm_password') {
            await setConfirmPassword(value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let hasError = false;

        if (username.trim().length === 0) {
            hasError = true;
            await setErrorUsername("Bắt buộc nhập tên đăng nhập.")
        }
        if (email.trim().length === 0) {
            hasError = true;
            await setErrorEmail("Bắt buộc nhập địa chỉ email.")
        }
        if (password.trim().length === 0) {
            hasError = true;
            await setErrorPassword("Bắt buộc nhập mật khẩu.")
        }
        if (confirmPassword.trim().length === 0) {
            hasError = true;
            await setErrorConfirmPassword("Bắt buộc nhập xác nhận mật khẩu.")
        }
        if (password !== confirmPassword) {
            hasError = true;
            alert("Mật khẩu chưa trùng khớp")

        }


        // TODO: Kiểm tra mật khẩu và xác nhận mật khẩu có trùng nhau không

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username || users[i].email === email) {
                if (users[i].username === username) {
                    hasError = true;
                    await setErrorUsername("Tên đăng nhập đã tồn tại")
                }
                if (users[i].email === email) {
                    hasError = true;
                    await setErrorEmail("Địa chỉ email đã tồn tại")
                }
                break;
            }
        }
        if (hasError) {
            return;
        }

        const newUser = {
            username: username,
            email: email,
            password: password
        }
        const newListUsers = [...users, newUser];
        window.localStorage.setItem("users", JSON.stringify(newListUsers));
        navigate('/login');
    }

    return (
        <>
            <div className="login-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input
                            value={username}
                            onChange={(e) => handleChange(e)} type="text" name="username" />
                        <span className="error">{errorUsername}</span><br></br>
                        <label>Username</label><br></br>
                    </div>
                    <div className="user-box">
                        <input
                            value={email}
                            onChange={(e) => handleChange(e)} type="text" name="email" />
                        {<span className="error">{errorEmail}</span>}<br></br>
                        <label>Email</label><br></br>
                    </div>
                    <div className="user-box">
                        <input
                            value={password}
                            onChange={(e) => handleChange(e)} type="password" name="password" />
                        {<span className="error">{errorPassword}</span>}<br></br>
                        <label>Password</label><br></br>
                    </div>
                    <div className="user-box">
                        <input
                            value={confirmPassword}
                            onChange={(e) => handleChange(e)} type="password" name="confirm_password" />
                        {<span className="error">{errorConfirmPassword}</span>}<br></br>
                        <label>Confirm Password </label><br></br>
                    </div>
                    {/* <button
                        type="submit" className="btn btn-primary">Submit</button> */}
                    <button type="submit"  >
                        <a >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            SUBMIT
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
