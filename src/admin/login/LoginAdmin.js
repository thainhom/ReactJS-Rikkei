import React from 'react';
import "./login.css";
function Register() {
    return (
        <>
            <div className="body"></div>
            <div className="grad"></div>
            <div className="header">
                <div>Co<span>-Luxury</span></div>
            </div>
            <br />
            <div className="login">
                <input type="text" placeholder="admin" name="admin" /><br />
                <input type="password" placeholder="password" name="password" /><br />
                <input type="button" value="Login" />
            </div>

        </>
    )
}

export default Register