import React, { useState } from 'react';
import './LocationPage.css'; // Import CSS file for styling

const LocationPage = () => {
  const [location, setLocation] = useState('');
  const [submittedLocation, setSubmittedLocation] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (location.trim() !== '') {
      setSubmittedLocation(location.trim());
      setLocation('');
    }
  };

  return (
    <div className="location-container">
      <h1>Welcome to flamingo</h1>
      <p>Please select your location to get started:</p>
      <form onSubmit={handleSubmit} className="location-form">
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter your location"
        />
        <button type="submit">Submit</button>
      </form>
      {submittedLocation && (
        <div className="selected-location">
          <h2>Selected Location:</h2>
          <p>{submittedLocation}</p>
        </div>
      )}
    </div>
  );
};

export default LocationPage;
