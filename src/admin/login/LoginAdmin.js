import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";
import "./login.css";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import authApi from '../api/auth.api'


function LoginAdmin() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [userAdmin, setUserAdmin] = useState("")
    const [passwordAdmin, setPassWordAdmin] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)



    console.log(users);
    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "useradmin") {
            setUserAdmin(value)
        }
        if (name === "passwordadmin") {
            setPassWordAdmin(value)
        }
        console.log(value);
    }

    const handleLoginAdmin = (e) => {
        e.preventDefault();

        // let isValid = false;
        // for (let i = 0; i < users.length; i++) {
        //     if (users[i].username === userAdmin && users[i].role === "admin" && users[i].password === passwordAdmin) {
        //         setUser(users[i]); // Đánh dấu người dùng là admin
        //         isValid = true;
        //         break;
        //     }
        // }

        // if (isValid) {
        //     window.localStorage.setItem("userLogin", JSON.stringify(user));
        //     navigate('/homeAdmin');
        // } else {
        //     setErrorMessage('Username or password is invalid')
        // }

        authApi.login(userAdmin, passwordAdmin, 'admin')
            .then(response => {
                console.log(response)
                window.localStorage.setItem('X-API-Key', response.token);
                navigate('/homeAdmin');
            }).catch(error => {
                alert(error);
            })
    }

    return (
        <>
            <form onSubmit={handleLoginAdmin}>
                <div className="body"></div>
                <div className="grad"></div>
                <div className="header">
                    <div>Co<span>-Luxury</span></div>
                </div>
                <br />
                <div className="login">
                    <input
                        value={userAdmin}
                        onChange={handleChange} type="text" placeholder="Username" name="useradmin" /><br />
                    <input
                        value={passwordAdmin}
                        onChange={handleChange} type="password" placeholder="Password" name="passwordadmin" /><br /><br />
                    <div className="text-danger mb-2">{errorMessage}</div>
                    <Button type="submit" variant="info">LOGIN</Button>
                </div>
            </form>
        </>
    )
}

export default LoginAdmin