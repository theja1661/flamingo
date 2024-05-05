import React, { useContext } from 'react';
import './CSS/FoodDisplay.css';
import { StoreContext } from './Context/StoreContext';
import FoodItem from './FoodItem';
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
   <div className='container'>
    <div className='food-display' id='food-display'>
      <h2>Top things</h2>
      <div className='food-display-list'>
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            );
          }
          return null; // Return null if condition doesn't match
        })}
      </div>
    </div>
    </div> 
  );
};

export default FoodDisplay;
