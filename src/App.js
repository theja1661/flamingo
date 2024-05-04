import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
//import Items from './Pages/Items';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LocationPage from './Pages/LocationPage';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/Items' element={<Home />}>
          </Route>
          
          <Route path='/Pick up' element={<ShopCategory category="Pickup" />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/location' element={<LocationPage />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
