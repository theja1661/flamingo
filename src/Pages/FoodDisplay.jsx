import React, { useContext } from 'react'
import './CSS/FoodDisplay.css';

import { StoreContext } from './Context/StoreContext';
//import { food_list } from '../../Components/Assets/assets';

import Items from './Items'; 


import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top things</h2>
        <div className='food-display-list'>
            {food_list.map((item,index)=>{

              if(category==="All" || category===item.category ){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={Items.image}/>
            
              }
            
            })}
        </div>
    </div>
  )
}
export default FoodDisplay