import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/Flamingo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [menu,setMenu] = useState("Set location");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>lets shop</p>
      </div>
      <ul className="nav-menu">
      <li onClick={()=>{setMenu("Set location")}}>Set location{menu==="Set location"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("SHOP")}}><Link to ='/'></Link>SHOP{menu==="SHOP"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Groceries")}}><Link to ='/Groceries'></Link>Groceries{menu==="Groceries"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Health care")}}><Link to ='/Health care'></Link>Health care{menu==="Health care"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Pick up")}}><Link to ='/Pick up'></Link>Pick up{menu==="Pick up"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
            <Link to='/login'><button>Sign up</button></Link>
            <Link to='/cart'><img src={cart_icon} alt='' /></Link>
            <div className="nav-cart-count">0</div>
       </div>
    </div>
  )
}

export default Navbar
