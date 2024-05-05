import React, { useContext } from 'react';
import './CSS/FoodDisplay.css';
import { StoreContext } from './Context/StoreContext';
import Items from './Items'; 
import FoodItem from './FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext) ||  { food_list: [] };

  return (
    <div className='food-display' id='food-display'>
      <h2>Top things</h2>
      <div className='food-display-list'>
        {food_list.map((item, index) => {
          console.log(category, item.category); // Logging inside map function
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                image={Items.image}
              />
            );
          }
          return null; // Return null if condition doesn't match
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
