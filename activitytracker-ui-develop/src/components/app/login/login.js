import React from "react";
import './login.scss';
import logo from './image.png'
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="loginPage">
                <form action="" className="loginform">
                    <span className="head">Activity Tracker</span>
                    <img id="image" src={logo} alt="logo of the page" />
                    <div className="loginbox">
                        <div>
                            <label htmlFor="email">User Name</label><br></br>
                            <input type="text" className="credentials" name="email" id="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br></br>
                            <input className="credentials" type="text" name="password" id="password" />
                        </div>
                        <span id="forgotPassword">Forgot password?</span>
                        <button className="log" type="submit">Login</button><br></br>
                        <div id="or">
                            <hr id="hr2" />
                            <span id="divider">Or</span>
                            <hr id="hr1"></hr>
                        </div>
                        <button onClick={() => { navigate('/Dashboard') }}
                            className="sso" type="button">SSO Via ACS</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;