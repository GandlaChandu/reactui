import React from 'react';
import logout from './logout.png';
import { useNavigate } from 'react-router-dom';
import './logout.scss'

function Logout(){
    const navigate=useNavigate()
    const handleLogin=()=>{
        navigate('/login')
    }
    return(
        <div className="container">
            <div className="logout-form">
                <div>
                    <img src={logout} alt="image not found"/>
                    <h3><b>OOPS! Session Expired</b></h3>
                    <p>Session remains active for only 15 minutes</p>
                    <button onClick={handleLogin}>LOGIN AGAIN</button>
                </div>
            </div>
        </div>
    )
}


export default Logout;