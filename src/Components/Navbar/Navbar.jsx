import React, { useEffect, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/Flamingo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [menu, setMenu] = useState("Set location");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('userEmail')) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>lets shop</p>
      </div>
      <ul className="nav-menu">
        <li className={`nav-menu-item ${menu === "LocationPage" ? "selected" : ""}`} onClick={() => { setMenu("LocationPage") }}>
          <Link to='/location' className="nav-menu-link">
            Set location
            {menu === "LocationPage" ? <hr className="nav-menu-divider" /> : null}
          </Link>
        </li>
        <li className={`nav-menu-item ${menu === "SHOP" ? "selected" : ""}`} onClick={() => { setMenu("SHOP") }}>
          <Link to='/' className="nav-menu-link">
            SHOP
            {menu === "SHOP" ? <hr className="nav-menu-divider" /> : null}
          </Link>
        </li>
        <Link to='/Items' className="nav-menu-link">
          Items
          {menu === "Items" ? <hr className="nav-menu-divider" /> : null}
        </Link>

        <li className={`nav-menu-item ${menu === "Pick up" ? "selected" : ""}`} onClick={() => { setMenu("Pick up") }}>
          <Link to='/Pick up' className="nav-menu-link">
            Pick up
            {menu === "Pick up" ? <hr className="nav-menu-divider" /> : null}
          </Link>
        </li>

      </ul>
      <div className="nav-login-cart">
        {loggedIn === false && (
          <button><Link to='/login'>Sign up</Link></button>
        )}

        <Link to='/cart'><img src={cart_icon} alt='' /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
