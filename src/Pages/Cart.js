import React from 'react';
import './CSS/cart.css'

const Cart = ({ cartItems }) => {
  // Guard against undefined cartItems
  if (!cartItems) {
    return <div>No items in cart</div>;
  }

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Define CartItem component directly within Cart component
  const CartItem = ({ item }) => {
    return (
      <div className="cart-item">
        <img src={item.image} alt={item.name} className="item-image" />
        <div className="item-details">
          <span className="item-name">{item.name}</span>
          <span className="item-price">${item.price.toFixed(2)}</span>
          <span className="item-quantity">Quantity: {item.quantity}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="cart">
      <h2 className="cart-title">Your Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="total-price">Total: ${totalPrice.toFixed(2)}</div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;
