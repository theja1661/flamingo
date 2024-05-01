import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import surprice from '../Assets/surprice.png'
const Popular = () => {
  return (
    <div className='popular'>
      <h1>Kannur</h1>
      <hr />
      <p>Why step out when you can get everything delivered home with the tap of a button? Kannur’s favourite delivery app gets you Food, Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and Send Packages from one end of the city to the other. From your local kirana stores to your favourite brands, grocery shopping to your forgotten charger, we are always on the move for you. Why worry about your chores, when you can get it all Dun!</p>
     
      <div className="popular-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id}name={item.name} image={item.image} />
        })}
      </div>
      <div className="header-slider"> 
        <img src={surprice} alt="" />
        <ul>
        
        </ul>
        
    </div>
    </div>
    
  )
}

export default Popular
