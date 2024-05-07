import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar' ;
import { Routes,Route} from 'react-router-dom';
import Add from "./Pages/Add/Add";
import List from "./Pages/List/List";
import  Orders from './Pages/Orders/Orders'; 
import Cart from './Pages/Cart/Cart'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
