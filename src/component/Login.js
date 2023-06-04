import React from 'react';
import "./Login.css"
 
  
  
 


class Login extends React.Component {
constructor(props) {
    super(props);
    this.state = {email: '',
    password: '',
}}
handleChange=(event)=>{
    const name=({event.target.name}),
    const value=({event.target.value})
}
    
    render() {
        return (
            <div className="btn-from">
                <div className='btn-backgroud'>
                    <form onSubmit={this.handlesubmit}>
                        <div>
                            <label>Login</label>
                            <input
                                name="email"
                                type='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <label>Login</label>
                            <input
                                name="password"
                                type='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                    </form>
                </div>
            </div>

        )
    }

}
export default Login