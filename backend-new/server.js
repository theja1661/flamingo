
// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');

// Create an Express application
const app = express();

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/send_packages', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Define a schema for send_packages collection
const sendPackageSchema = new mongoose.Schema({
    pickupLocation: String,
    dropLocation: String,
    deliveryInstructions: String
});

// Create a model based on the schema
const SendPackage = mongoose.model('SendPackage', sendPackageSchema);

// Define routes
app.use(express.json());

// Route for saving send package data to the database
app.post('/send-package', async (req, res) => {
    const { pickupLocation, dropLocation, deliveryInstructions } = req.body;
    const sendPackage = new SendPackage({
        pickupLocation,
        dropLocation,
        deliveryInstructions
    });
    await sendPackage.save();
    res.send('Send package data saved successfully');
});

// Route for retrieving send package data from the database
app.get('/send-packages', async (req, res) => {
    const sendPackages = await SendPackage.find();
    res.send(sendPackages);
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

