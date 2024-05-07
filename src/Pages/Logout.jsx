import React, { useEffect } from 'react';

const LogoutPage = () => {
  useEffect(() => {
    // Logout logic
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    window.location.href = '/login'; // Redirect to the login page
  }, []);

  return (
    <div>
      <h1>Logout Page</h1>
      {/* You can display a message indicating that the user has been logged out */}
    </div>
  );
};

export default LogoutPage;
