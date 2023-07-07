import { useNavigate } from "react-router-dom";
import "./login.css";
import { useEffect, useState } from "react";
function Register() {
    const navigate = useNavigate
    const [users, setUsers] = useState([]);
    const [userAdmin, setUserAdmin] = useState("")
    const [passwordAdmin, setPassWordAdmin] = useState("")
    useEffect(() => {
        setUsers(window.localStorage.getItem("users") ? JSON.parse(window.localStorage.getItem("users")) : [])
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "useradmin") {
            setUserAdmin(value)
        }
        if (name === "passwordadmin") {
            setPassWordAdmin(value)
        }
    }
    const handleLogin = () => {
        alert("alo")

    }
    return (
        <>
            <div className="body"></div>
            <div className="grad"></div>
            <div className="header">
                <div>Co<span>-Luxury</span></div>
            </div>
            <br />
            <div className="login">
                <input
                    value={userAdmin}
                    onChange={handleChange} type="text" placeholder="admin" name="useradmin" /><br />
                <input
                    value={passwordAdmin}
                    onChange={handleChange} type="password" placeholder="password" name="passwordadmin" /><br />
                <input onClick={handleLogin} type="button" value="Login" />
            </div>

        </>
    )
}

export default Register