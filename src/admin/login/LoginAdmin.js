import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";
import "./login.css";
import { useEffect, useState } from "react";
import moment from "moment/moment";

const initUser = {
    userId: 0,
    username: 'admin',
    email: 'admin@mail.com',
    password: 'password',
    role: 'admin',
    createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
}

function LoginAdmin() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [userAdmin, setUserAdmin] = useState("")
    const [passwordAdmin, setPassWordAdmin] = useState("")
    const [user, setUser] = useState(null); // State để theo dõi trạng thái admin
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        setUsers(window.localStorage.getItem("users") ? JSON.parse(window.localStorage.getItem("users")) : [initUser])
    }, []);

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

        let isValid = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === userAdmin && users[i].role === "admin" && users[i].password === passwordAdmin) {
                setUser(users[i]); // Đánh dấu người dùng là admin
                isValid = true;
                break;
            }
        }

        if (isValid) {
            window.localStorage.setItem("userLogin", JSON.stringify(user));
            navigate('/homeAdmin');
        } else {
            setErrorMessage('Username or password is invalid')
        }
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