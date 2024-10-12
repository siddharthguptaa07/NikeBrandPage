import React from 'react'
import './nav.css'

const Nav = () => {
  return (
   <>


   <div className="navbar">

    <div className="logo">
        <img src="brand_logo(1).png" alt="hel" />
    </div>
    <div className="nav">
    <ul>
        <li><a href="#">MENU</a></li>
        <li><a href="#">LOCATION</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
    </ul>
    </div>
    <div className="btn">
        <button className="btnLogin">LOGIN</button>
    </div> 


   </div>
   
 
   
   
   
   </>




  )
}

export default Nav;