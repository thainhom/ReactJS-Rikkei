import React from 'react';
import "./Register.css";
class Login extends React.Component {
    constructor() {
        super();
        this.state =
        {
            form: {
                email: '',
                password: '',
            },

            error: {},
        }
    }
    handleChange = (event) => {
        // copy lai tk form o state
        const data = { ...this.state.form };
        // lay duoc gia tri cua tk name tu nhung o input
        data[event.target.name] = event.target.value
        // gan data lai cho tk form de set lai
        this.setState({
            form: data,
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault()//preventDefault ham chan loding lai trang wed khi submit
        const { email, password } = this.state.form
        // tim error
        //1 dat bien errro rong
        const error = {};
        // neu email trong thi bao loi 
        if (typeof email === "string" && email.trim() === "") {// trim() băm khoảng trông
            error.email = "vui long nhap email"
        }
        // tiep ktra password co rong ko 
        if (typeof password === "string" && password.trim() === "") {
            error.password = "vui long nhap password"
        }
        // gắn error lại cho error set lại 
        this.setState({ error: error })
        console.log(error);
    }

    render() {
        const { form, error } = this.state
        console.log(error);
        return (
            <div className="register">
                <div className="ctn-btn">
                    <h1>ACCount Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="Rigister-content row"></div>

                        <div className="email">
                            <label>Eamil</label>
                            <input
                         
                                id="email" placeholder="eamil"
                                type="text" name="email"
                                onChange={this.handleChange} />
                                 {error.email && <span className='error'>{error.email}</span>}
                        </div>
                        <div className="password">
                            <label>Password</label>
                            <input 
                                id="password" placeholder="Password"
                                type="password" name="password"
                                onChange={this.handleChange} />
                                    {error.password && <span className='error' >{error.password}</span>}
                        </div>
                        <button className="button" type="submit">Login</button>
                    </form>
                </div>
            </div>

        )
    }

}
export default Login