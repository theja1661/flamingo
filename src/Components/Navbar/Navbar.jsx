// import React, { useEffect, useState,useContext } from 'react'
// import './Navbar.css'

// import logo from '../Assets/Flamingo.png'
// import cart_icon from '../Assets/cart_icon.png'
// import { Link } from 'react-router-dom';
// import { StoreContext } from '../../Pages/Context/StoreContext'; // Assuming you have StoreContext set up
// import LogoutPage from '../../Pages/Logout';

// const Navbar = () => {

//   const [menu, setMenu] = useState("Set location");
//   const [loggedIn, setLoggedIn] = useState(false);
//   const { cartItems } = useContext(StoreContext); // Access cartItems from the context
//   const cartCount = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

//   useEffect(() => {
//     if (localStorage.getItem('userEmail')) {
//       setLoggedIn(true);
//     }
//   }, []);

//   return (
//     <div className='navbar'>
//       <div className="nav-logo">
//         <a href="/">
//           <img src={logo} alt="" />
//         </a>  <p>lets shop</p>
//       </div>
//       <ul className="nav-menu">
//         <li className={`nav-menu-item ${menu === "LocationPage" ? "selected" : ""}`} onClick={() => { setMenu("LocationPage") }}>
//           <Link to='/location' className="nav-menu-link">
//             Send Package
//             {menu === "LocationPage" ? <hr className="nav-menu-divider" /> : null}
//           </Link>
//         </li>
//         <li className={`nav-menu-item ${menu === "SHOP" ? "selected" : ""}`} onClick={() => { setMenu("SHOP") }}>
//           <Link to='/shop' className="nav-menu-link">
//             Shop
//             {menu === "SHOP" ? <hr className="nav-menu-divider" /> : null}
//           </Link>
//         </li>
//         <li className={`nav-menu-item ${menu === "ContactUs" ? "selected" : ""}`} onClick={() => { setMenu("ContactUs") }}>
//           <Link to='/ContactUs' className="nav-menu-link">
//           ContactUs
//             {menu === "ContactUs" ? <hr className="nav-menu-divider" /> : null}
//           </Link>
//         </li>

//          {/* <li className={`nav-menu-item ${menu === "Logout" ? "selected" : ""}`} onClick={() => { setMenu("Logout") }}>
//           <Link to='/Logout' className="nav-menu-link">
//             Logout
//             {menu === "Logout" ? <hr className="nav-menu-divider" /> : null}
//           </Link>
//         </li>  */}

//       </ul>
//       <div className="nav-login-cart">
//         {loggedIn === false && (
//           <button><Link to='/login'>Sign up</Link></button>
//         )}

//         <Link to='/cart'><img src={cart_icon} alt='' /></Link>
//         <div className="nav-cart-count">{cartCount}</div>
//       </div>

//       {/* <div className="nav-logout-cart">
//         {Logout === false && (
//           <button><Link to='/logout'>Logout</Link></button>
//         )}

//         <Link to='/cart'><img src={cart_icon} alt='' /></Link>
//         <div className="nav-cart-count">{cartCount}</div>
//       </div> */}

//     </div>
//   )
// }

// export default Navbar




import React, { useEffect, useState, useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Pages/Context/StoreContext'; // Assuming you have StoreContext set up
import cart_icon from '../Assets/cart_icon.png';
import logo from '../Assets/Flamingo.png';


const Navbar = () => {
  const [menu, setMenu] = useState("Set location");
  const [loggedIn, setLoggedIn] = useState(false);
  const { cartItems } = useContext(StoreContext); // Access cartItems from the context
  const cartCount = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

  useEffect(() => {
    if (localStorage.getItem('userEmail')) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>  <p>lets shop</p>
      </div>
      <ul className="nav-menu">
        <li className={`nav-menu-item ${menu === "LocationPage" ? "selected" : ""}`} onClick={() => { setMenu("LocationPage") }}>
          <Link to='/location' className="nav-menu-link">
            Send Package
            {menu === "LocationPage" ? <hr className="nav-menu-divider" /> : null}
          </Link>
        </li>
        <li className={`nav-menu-item ${menu === "SHOP" ? "selected" : ""}`} onClick={() => { setMenu("SHOP") }}>
          <Link to='/shop' className="nav-menu-link">
            Shop
            {menu === "SHOP" ? <hr className="nav-menu-divider" /> : null}
          </Link>
        </li>
        <li className={`nav-menu-item ${menu === "ContactUs" ? "selected" : ""}`} onClick={() => { setMenu("ContactUs") }}>
          <Link to='/ContactUs' className="nav-menu-link">
           Join Us
            {menu === "ContactUs" ? <hr className="nav-menu-divider" /> : null}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        {loggedIn === false && (
          <button><Link to='/signup'>Sign up</Link></button>
        )}
        {loggedIn && (
          <button><Link to='/logout'>Logout</Link></button>
        )}
        <Link to='/cart'><img src={cart_icon} alt='' /></Link>
        <div className="nav-cart-count">{cartCount}</div>
      </div>
    </div>
  )
}

export default Navbar;
