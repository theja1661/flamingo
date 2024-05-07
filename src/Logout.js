import React, { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    // Perform logout logic here
    localStorage.removeItem('token'); // Remove token from local storage
    localStorage.removeItem('userEmail'); // Remove user email from local storage
    window.location.href = '/login'; // Redirect to the login page
  }, []);

  return (
    <div>
      <h1>Logging out...</h1>
      {/* You can add a loading indicator or message here */}
    </div>
  );
};

export default Logout;
