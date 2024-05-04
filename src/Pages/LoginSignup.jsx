import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5002/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('userEmail', credentials.email);
      localStorage.setItem('token', json.authToken);
      window.location.href = "/"; // Redirect to the homepage
    } else {
      alert(json.message);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" value={credentials.name} placeholder='Your Name' onChange={(e) => setCredentials({ ...credentials, name: e.target.value })} />
          <input type="email" placeholder='Email Address' value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />
          <input type="password" placeholder='Password' value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
        </div>
        <button onClick={handleSubmit}>Continue</button>
        <p className="loginsignup-login">Already have an account?<span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;