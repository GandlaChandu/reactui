import React from 'react';
import Header from '../header';
import Footer from '../footer';
import NavBar from '../navbar';
import './layout.scss';

function Layout({
    children
}) {
  return (
    <div className="layout">
        <Header/>
     
        <div className='layoutContent'>
           <NavBar/>
            <div>{children}</div>
           
        </div>
        <Footer/>
    </div>
    
  )
}

export default Layout