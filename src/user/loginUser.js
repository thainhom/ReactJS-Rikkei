import "./Register.css";

function Login() {



    return (
        <>
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>Username</label>
                    </div>

                    <div className="user-box">
                        <input type="password" name="" required="" />
                        <label>Password</label>
                    </div>

                    <a href="">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Register
                    </a>

                </form>
            </div>

        </>

    )
}
export default Login


