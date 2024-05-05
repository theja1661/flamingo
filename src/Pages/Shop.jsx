import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Shops.css';
import shopAImage from '../Components/Assets/shop_a.png';
import shopBImage from '../Components/Assets/shop_b.png';
import shopCImage from '../Components/Assets/shop_c.png';
import shopDImage from '../Components/Assets/shop_d.png';
import shopEImage from '../Components/Assets/shop_e.png';
import shopFImage from '../Components/Assets/shop_f.png';


const ShopsPage = () => {
  const shops = [
      {
          id: 1,
          name: 'Shop A',
          image: shopAImage,
          location: '123 Main St, City',
          description: 'Deliver all kind of stuffs',
          link: '/shop-a'
      },
      {
          id: 2,
          name: 'Shop B',
          image: shopBImage,
          location: '456 Elm St, Town',
          description: 'Deliver Fresh Bakes',
          link: '/shop-b'
      },
      {
          id: 3,
          name: 'Shop C',
          image: shopCImage,
          location: '789 Oak St, Village',
          description: 'Everthing at ur doorsteps',
          link: '/shop-c'
      },
      {
          id: 4,
          name: 'Shop D',
          image: shopDImage,
          location: '101 Pine St, Town',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          link: '/shop-d'
      },
      {
          id: 5,
          name: 'Shop E',
          image: shopEImage,
          location: '202 Maple St, City',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          link: '/shop-e'
      },
      {
          id: 6,
          name: 'Shop F',
          image: shopFImage,
          location: '303 Elm St, Village',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          link: '/shop-f'
      },
      // Add more shop data as needed
  ];

  return (
    <div className="shops-page-container">
        <h2>Shops</h2>
        {shops.map(shop => (
            <div key={shop.id} className="shop">
                <div className="shop-details">
                    <img src={shop.image} alt={shop.name} className="shop-image" />
                    <div>
                        <h3 className="shop-name">{shop.name}</h3>
                        <p className="shop-location">{shop.location}</p>
                        <p className="shop-description">{shop.description}</p>
                        <Link to="/Items" className="shop-link">Shop</Link>
                    </div>
                </div>
            </div>
        ))}
    </div>
);
};

export default ShopsPage;
