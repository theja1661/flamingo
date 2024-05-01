import React from 'react'
import './Hero.css'
import firstimg from '../Assets/firstimg.jpeg'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
       
     
      <div className='hero-right'>
        <img src={firstimg} alt='' />
     </div>
     </div>
    </div>
  )
}

export default Hero
