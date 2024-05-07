import React,{useEffect,useState} from 'react';
import './CSS/Items.css'; 
import { menu_list } from '../Components/Assets/assets';
// import {food_list} from '../Components/Assets/assets';

const Items = ({ category, setCategory }) => {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    if (localStorage.getItem('userEmail')) {
      let email = localStorage.getItem('userEmail');
      let name = email.split('@')[0];
      setUserName(name);
    }
  }, []);

  return (
   <div className='container'>
    <div className='explore-menu' id='explore-menu'>
      <h1>HEY {userName} WELCOME</h1>
      
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
    </div> 
  );
}

export default Items;
