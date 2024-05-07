import React from 'react';
import './CSS/Payment.css';

const PaymentPage = () => {
    const handlePayNow = (paymentOption) => {
        // Display a pop-up message for successful payment
        alert(`Payment successful using ${paymentOption}!`);

        window.location.href = '/';
    };

    return (
        <div className="payment-container">
            <h2>Payment Page</h2>
            <div className="payment-options">
                <button onClick={() => handlePayNow('Credit Card')}>Pay with Credit Card</button>
                <button onClick={() => handlePayNow('Debit Card')}>Pay with Debit Card</button>
                <button onClick={() => handlePayNow('PayPal')}>Pay with PayPal</button>
                <button onClick={() => handlePayNow('Google Pay')}>Pay with Google Pay</button>
                <button onClick={() => handlePayNow('Apple Pay')}>Pay with Apple Pay</button>
                {/* Add more payment options as needed */}
            </div>
        </div>
    );
};

export default PaymentPage;
