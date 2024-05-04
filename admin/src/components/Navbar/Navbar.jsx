import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

 const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='Flamingo' src={assets.Flamingo} alt=''/>
        <img className='Account' src={assets.account} alt=''/>
    </div>
  )
}
export default Navbar