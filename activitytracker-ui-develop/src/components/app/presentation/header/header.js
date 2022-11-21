import React, { Component, useState } from 'react';
//import 'font-awesome/css/font-awesome.min.css';
import profileImage from '../header/profile-image.jpeg'
import './header.scss'
import  Breadcrumb  from '../navbar/breadcrumb/breadcrumb';

function Header() {
    const [displayMenu, setdisplayMenu] = useState(false)

    return (
        <>
            <div className='Header'>
                <ul className='Header-Items'>
                    <li className='Title'>
                        <h2>Activity Tracker</h2>
                        <h4>Manage all Organisation Trainee details</h4>
                    </li>
                    <li className='Image'>
                        <img alt='' src={profileImage} className='ImgStyle' /><i className='fa fa-caret-down' onClick={() => setdisplayMenu(prev=>!prev)}></i>
                        {displayMenu ? (
                            <ul className='DropdownList'>
                                <li>Logout </li>
                            </ul>
                        ) :
                            (
                                null
                            )
                        }
                    </li>
                    <li className='Notification'><i className="fa fa-solid fa-bell"></i></li>
                </ul>
                
            </div>
            <Breadcrumb />
        </>
    )

}

export default Header;
