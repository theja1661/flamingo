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
import FlamingoHome from './Pages/flamingoHome';
import AddAddress from './Pages/AddAddress';
import Payment from './Pages/Payment';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import ContactUs from './Pages/JoinUs';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<FlamingoHome />} />

          <Route path='/Items' element={<Home />}/>
          <Route path='/shop' element={<Shop />} />
          <Route path='/Payment' element={<Payment />} />
          <Route path='/AddAddress' element={<AddAddress />} />
          <Route path='/ContactUs' element={<ContactUs />} />

          <Route path='/Pick up' element={<ShopCategory category="Pickup" />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signup' element={<LoginSignup />} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/location' element={<LocationPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
