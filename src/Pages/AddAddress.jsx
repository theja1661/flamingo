import React, { useState } from 'react';
import axios from 'axios';
import './CSS/LocationPage.css'; // Import CSS file for styling

const AddAddressPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleLocalityChange = (event) => {
    setLocality(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name && phone && locality && address && state) {
      try {
        // Send form data to backend
        await axios.post('http://localhost:5002/api/address', {
          name,
          phone,
          locality,
          address,
          state
        });
        // Redirect to Payment page after successful submission
        window.location.href = '/Payment';
      } catch (error) {
        // Handle error
        console.error('Error adding address:', error);
      }
    } else {
      // Notify user to fill all fields
      alert('Please fill all the fields');
    }
  };

  return (
    <div className="send-package-container">
      <h2>Add Address</h2>
      <form onSubmit={handleSubmit} className="package-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="locality">Locality:</label>
          <input
            type="text"
            id="locality"
            value={locality}
            onChange={handleLocalityChange}
            placeholder="Enter your locality"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={handleAddressChange}
            placeholder="Enter your address"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={handleStateChange}
            placeholder="Enter your state"
            required
          />
        </div>
        <button type="submit">Add Address</button>
      </form>
    </div>
  );
};

export default AddAddressPage;




// import React, { useState } from 'react';
// import axios from 'axios'; 
// import './CSS/AddAddress.css'; // Import CSS file for styling

// const AddAddressPage = () => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [locality, setLocality] = useState('');
//   const [address, setAddress] = useState('');
//   const [state, setState] = useState('');
//   const [readyToSubmit, setReadyToSubmit] = useState(false); // State to track form submission readiness

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//     checkFormCompletion();
//   };

//   const handlePhoneChange = (event) => {
//     setPhone(event.target.value);
//     checkFormCompletion();
//   };

//   const handleLocalityChange = (event) => {
//     setLocality(event.target.value);
//     checkFormCompletion();
//   };

//   const handleAddressChange = (event) => {
//     setAddress(event.target.value);
//     checkFormCompletion();
//   };

//   const handleStateChange = (event) => {
//     setState(event.target.value);
//     checkFormCompletion();
//   };

//   const checkFormCompletion = () => {
//     // Check if all fields have values
//     if (name && phone && locality && address && state) {
//       setReadyToSubmit(true); // Set readyToSubmit to true if all fields are filled
//     } else {
//       setReadyToSubmit(false); // Set readyToSubmit to false if any field is empty
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (readyToSubmit) {
//       try {
//         // Send form data to backend
//         await axios.post('http://localhost:5002/api/Address', {
//           name,
//           phone,
//           locality,
//           address,
//           state
//         });
//         // Clear form fields after successful submission
//         setName('');
//         setPhone('');
//         setLocality('');
//         setAddress('');
//         setState('');
//         // Optionally, display a success message or redirect to another page
//         console.log('Address added successfully');
//         // Redirect to the Payment page
//         window.location.href = '/Payment';
//       } catch (error) {
//         // Handle error
//         console.error('Error adding address:', error);
//       }
//     } else {
//       // Notify user to fill all fields
//       alert('Please fill all the fields');
//     }
//   };

//   return (
//     <div className="add-address-container">
//       <h2>Add Address</h2>
//       <form onSubmit={handleSubmit} className="address-form">
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={handleNameChange}
//             placeholder="Enter your name"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone:</label>
//           <input
//             type="text"
//             id="phone"
//             value={phone}
//             onChange={handlePhoneChange}
//             placeholder="Enter your phone number"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="locality">Locality:</label>
//           <input
//             type="text"
//             id="locality"
//             value={locality}
//             onChange={handleLocalityChange}
//             placeholder="Enter your locality"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Address:</label>
//           <textarea
//             id="address"
//             value={address}
//             onChange={handleAddressChange}
//             placeholder="Enter your address"
//             required
//           ></textarea>
//         </div>
//         <div className="form-group">
//           <label htmlFor="state">State:</label>
//           <input
//             type="text"
//             id="state"
//             value={state}
//             onChange={handleStateChange}
//             placeholder="Enter your state"
//             required
//           />
//         </div>
//         {/* Enable button only when all fields are filled */}
//         <button type="submit" disabled={!readyToSubmit}>Add Address</button>
//       </form>
//     </div>
//   );
// };

// export default AddAddressPage;
