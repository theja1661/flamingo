import React, { useState } from 'react';
import './CSS/ContactUs.css'; // Import CSS file



const PartnerUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send data to server)
    console.log('Form submitted:', { name, email, phoneNumber, message });
    // Clear form fields after submission
    setName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
    // Set submitted state to true
    setSubmitted(true);
  };

  return (
    <div className="partner-up-page">
      <header>
        <h1 className="title">Partner with Flamingo</h1>
        
      </header>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="partner-form">
          <p className="subtitle">Fill out the form below to enroll for partnership inquiries</p>
          <div className="form-group">
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="tel" id="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Your Phone Number" required />
          </div>
          <div className="form-group">
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message (Optional)" />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="submitted-message">
          <p><b>Thank you for your interest in partnering with Flamingo!</b></p>
          <p>We'll get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default PartnerUpPage;