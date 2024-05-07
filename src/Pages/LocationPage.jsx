// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './CSS/LocationPage.css'; // Import CSS file for styling

// const SendPackagePage = () => {
//   const [pickupLocation, setPickupLocation] = useState('');
//   const [dropLocation, setDropLocation] = useState('');
//   const [deliveryInstructions, setDeliveryInstructions] = useState('');

//   const handlePickupLocationChange = (event) => {
//     setPickupLocation(event.target.value);
//   };

//   const handleDropLocationChange = (event) => {
//     setDropLocation(event.target.value);
//   };

//   const handleDeliveryInstructionsChange = (event) => {
//     setDeliveryInstructions(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // Send form data to backend
//       await axios.post('http://localhost:5002/api/sendpackage', {
//         pickupLocation,
//         dropLocation,
//         deliveryInstructions
//       });
//       // Clear form fields after successful submission
//       setPickupLocation('');
//       setDropLocation('');
//       setDeliveryInstructions('');
//       // Optionally, display a success message or redirect to another page
//       console.log('Package sent successfully');
//     } catch (error) {
//       // Handle error
//       console.error('Error sending package:', error);
//     }
//   };

//   return (
//     <div className="send-package-container">
//       <h2>Send Package</h2>
//       <form onSubmit={handleSubmit} className="package-form">
//         <div className="form-group">
//           <label htmlFor="pickup-location">Pickup Location:</label>
//           <input
//             type="text"
//             id="pickup-location"
//             value={pickupLocation}
//             onChange={handlePickupLocationChange}
//             placeholder="Enter pickup location"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="drop-location">Drop Location:</label>
//           <input
//             type="text"
//             id="drop-location"
//             value={dropLocation}
//             onChange={handleDropLocationChange}
//             placeholder="Enter drop location"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="delivery-instructions">Delivery Instructions:</label>
//           <textarea
//             id="delivery-instructions"
//             value={deliveryInstructions}
//             onChange={handleDeliveryInstructionsChange}
//             placeholder="Any special instructions for delivery?"
//           ></textarea>
//         </div>
//         {/* Use Link component to navigate to Payment page */}
//         <Link to="/Payment" className="payment">
//           <button type="submit">Send Package</button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default SendPackagePage;


import React, { useState } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import './CSS/LocationPage.css'; // Import CSS file for styling

const SendPackagePage = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [deliveryInstructions, setDeliveryInstructions] = useState('');

  const handlePickupLocationChange = (event) => {
    setPickupLocation(event.target.value);
  };

  const handleDropLocationChange = (event) => {
    setDropLocation(event.target.value);
  };

  const handleDeliveryInstructionsChange = (event) => {
    setDeliveryInstructions(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (pickupLocation && dropLocation && deliveryInstructions) {
      try {
        // Send form data to backend
        await axios.post('http://localhost:5002/api/sendpackage', {
          pickupLocation,
          dropLocation,
          deliveryInstructions
        });
        // Redirect to Payment page after successful submission
        window.location.href = '/Payment';
      } catch (error) {
        // Handle error
        console.error('Error sending package:', error);
      }
    } else {
      // Notify user to fill all fields
      alert('Please fill all the fields');
    }
  };

  return (
    <div className="send-package-container">
      <h2>Send Package</h2>
      <form onSubmit={handleSubmit} className="package-form">
        <div className="form-group">
          <label htmlFor="pickup-location">Pickup Location:</label>
          <input
            type="text"
            id="pickup-location"
            value={pickupLocation}
            onChange={handlePickupLocationChange}
            placeholder="Enter pickup location"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="drop-location">Drop Location:</label>
          <input
            type="text"
            id="drop-location"
            value={dropLocation}
            onChange={handleDropLocationChange}
            placeholder="Enter drop location"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="delivery-instructions">Delivery Instructions:</label>
          <textarea
            id="delivery-instructions"
            value={deliveryInstructions}
            onChange={handleDeliveryInstructionsChange}
            placeholder="Any special instructions for delivery?"
            required
          ></textarea>
        </div>
        <button type="submit">Send Package</button>
      </form>
    </div>
  );
};

export default SendPackagePage;




