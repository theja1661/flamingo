import React,{useState} from 'react'
import './Home.css'
import Items from './Items'; 

import FoodDisplay from '../Components/FoodDisplay/FoodDisplay'

const Home=() => {
    const [category,setCategory]=useState("All");
  return (
    <div>
        <Items category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home