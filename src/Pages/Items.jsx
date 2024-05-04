import React from 'react';
import './CSS/Items.css'; 
import { menu_list } from '../Components/Assets/assets';
// import {food_list} from '../Components/Assets/assets';

const Items = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>HEY WELCOME</h1>
      <p className='explore-menu-text'>choose anything</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Items;
