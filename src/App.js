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
          <Route path='/' element={<Navbar/>} />
          <Route path='/Items' element={<Home />}>
          </Route>
          <Route path='/Groceries' element={<ShopCategory category="Grocery" />} />
          <Route path='/Health care' element={<ShopCategory category="Health" />} />
          <Route path='/Pick up' element={<ShopCategory category="Pickup" />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/location' element={<LocationPage />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
