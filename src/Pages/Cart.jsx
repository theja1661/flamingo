import React, { useContext, useEffect, useState } from 'react';
import './CSS/cart.css'; // Adjust the path to your CSS file
import { StoreContext } from '../Pages/Context/StoreContext'; // Adjust the path to StoreContext
import { food_list } from '../Components/Assets/assets';

const CartComponent = () => {
    const { cartItems, removeFromCart, setCartItems } = useContext(StoreContext);
    const [totalAmount, setTotalAmount] = useState(0);
    const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);

    useEffect(() => {
        // Calculate total amount when cart items change
        let total = 0;
        Object.keys(cartItems).forEach(itemId => {
            const item = food_list.find(item => item._id === itemId);
            if (item) {
                total += item.price * cartItems[itemId]*100;
            }
        });
        setTotalAmount(total);
    }, [cartItems]);

    const handlePaid = () => {
        // You can implement your logic to handle the paid action here
        if (selectedPaymentOption) {
            alert(`Items are paid using ${selectedPaymentOption}!`);
            // Clear cart items
            setCartItems({});
            // Redirect to home page
            window.location.href = '/';
        } else {
            alert('Please select a payment option.');
        }
    };

    // Check if cart is empty
    const isEmptyCart = Object.keys(cartItems).length === 0;

    return (
        <div className='cartContainer'>
            {isEmptyCart ? (
                <div className="emptyCartMessage">Your cart is empty. Please add items to continue.</div>
                ) : (
                <>
                    <div className="cartItems">
                        <div className="cartItemsTitle">
                            <p>Items</p>
                            <p>Title</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Total</p>
                            <p>Remove</p>
                        </div>
                        <br />
                        <hr />
                        {Object.keys(cartItems).map(itemId => {
                            const quantity = cartItems[itemId];
                            const item = food_list.find(item => item._id === itemId);
                            if (!item || quantity <= 0) return null;

                            const total = item.price * quantity;

                            return (
                                <div className="cartItem" key={itemId}>
                                    <p>{item.category}</p>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{quantity}</p>
                                    <p>{total}00</p> {/* Display total in rupees */}
                                    <button onClick={() => removeFromCart(itemId)}>Remove</button>
                                </div>
                            );
                        })}
                    </div>
                    <div className="cartTotal">
                        <p>Total Amount: {totalAmount} Rs</p>
                        <div className="paymentOptions">
                            <label>
                                <input
                                    type="radio"
                                    name="paymentOption"
                                    value="Google Pay"
                                    onChange={(e) => setSelectedPaymentOption(e.target.value)}
                                />
                                Google Pay
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="paymentOption"
                                    value="PhonePe"
                                    onChange={(e) => setSelectedPaymentOption(e.target.value)}
                                />
                                PhonePe
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="paymentOption"
                                    value="Paytm"
                                    onChange={(e) => setSelectedPaymentOption(e.target.value)}
                                />
                                Paytm
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="paymentOption"
                                    value="Cash on Delivery"
                                    onChange={(e) => setSelectedPaymentOption(e.target.value)}
                                />
                                Cash on Delivery 
                            </label>
                        </div>
                        <br />
                        <hr />
                        <button onClick={handlePaid}>Pay</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartComponent;
