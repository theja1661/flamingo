import React, { useContext } from 'react'
import './FoodDisplay.css'; 
import Items from './Items'; // Adjust the import path as necessary



//import { food_list } from '../Assets/assets'
import { StoreContext } from '../../Pages/Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

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