// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const LoginSignup = () => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5002/api/auth/login", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email: credentials.email, password: credentials.password })
//     });
//     const json = await response.json();
//     console.log(json);
//     if (json.success) {
//       localStorage.setItem('token', json.authToken);
//       window.location.href = "/"; // Redirect to the homepage
//     } else {
//       alert(json.message);
//     }
//   };

//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Login</h1>
//         <div className="loginsignup-fields">
//           <input type="email" placeholder='Email Address' value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />
//           <input type="password" placeholder='Password' value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
//         </div>
//         <button onClick={handleSubmit}>Continue</button>
//         {/* <p className="loginsignup-login">Already have an account?<span><Link to="/login">Login here</Link></span></p>
       
//         <div className="loginsignup-agree">
//           <input type="checkbox" name='' id='' />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkUserExists = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5002/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({  email: credentials.email, password: credentials.password })
      });
      // const response = await fetch(`http://localhost:5002/api/auth/loginuser`);
       const data = await response.json();
       console.log(data)
// if(!response.success){
//   return{
//     success :false
//   }
// }
      if (data.success ) {
        window.location.href = '/';
        return true;
        //return data.password === password;
      } else {
        setError('User does not exist.');
        return data
        return false;
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error connecting to the server.');
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { email, password } = credentials;
      console.log(email,password)
      const userExists = await checkUserExists(email, password);
      console.log( userExists,'hello')
      if (userExists.success) {
        setLoggedIn(true);
        setLoading(false);

      } else {
        if(!userExists.success){
          setError(userExists.message)
          setLoading(false);
        }
        else{
        setError('Invalid email or password.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred.');
    }
    //setLoading(false);
  };

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError(''); // Clear error when user starts typing
  };

  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        {!loggedIn && error && <div className="error">{error}</div>}
        {!loggedIn && (
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder='Email Address' value={credentials.email} onChange={handleInputChange} required />
            <input type="password" name="password" placeholder='Password' value={credentials.password} onChange={handleInputChange} required />
            <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
          </form>
        )}
        {!loggedIn && (
          <p className="login-signup">Don't have an account? <Link to="/signup">Sign up</Link></p>
        )}
      </div>
    </div>
  );
};

export default Login;


