const express = require('express');
const app = express();
const port = 5002;
const mongoDB = require('./db');
const cors = require('cors');
const createUserRouter = require('./Routes/CreateUser');
const User = require('./models/User'); // Import the User model

// Connect to MongoDB
mongoDB();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Function to create a new user
const createUser = async (userData) => {
  try {
      const newUser = await User.create(userData);
      return newUser;
  } catch (error) {
      console.error("Error creating user:", error);
      throw error; // Throw the error to handle it in the caller
  }
};

// Authentication Endpoint to Add User
app.post('/api/auth/login', async (req, res) => {
  try {
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists please login" });
    } else {
      // Create a new user
      const newUser = await createUser(req.body);
      return res.status(200).json({ success: true, message: "User created successfully", user: newUser });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Mount the createUserRouter
app.use('/api', createUserRouter);

// Start the server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});