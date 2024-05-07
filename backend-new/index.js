const express = require('express');
const app = express();
const port = 5002;
const mongoDB = require('./db');
const cors = require('cors');
const createUserRouter = require('./Routes/CreateUser');
const User = require('./models/User'); // Import the User model
const SendPackRouter = require('./Routes/SendPack');
const ProductsRouter=require('./Routes/Products');
const addressRouter=require('./Routes/address');
const cartRouter=require('./Routes/cart');
//const LoginUserRouter=require('/Routes/LoginUser');
const SendPackage=require('./models/SendPackage');
// const ProductsRouter = require('./Routes/Products.js');

// Connect to MongoDB
mongoDB();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.get('/', (req, res) => {
  res.send('App working');
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
app.post('/api/auth/signup', async (req, res) => {
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
app.post('/api/auth/login', async (req, res) => {
  try {
    // Check if the user already exists in the database
    console.log('hi')
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.status(400).json({ success: false, message: "User does not  exists please signup" });
    } else {
      if(existingUser.password!==req.body.password)
        {
          return res.status(400).json({ success: false, message: "password doesnt match" });
        }
        
      // Create a new user
      //const newUser = await createUser(req.body);
      return res.status(200).json({ success: true, message: "User  successfully logged in "});
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Mount the createUserRouter
app.use('/api', createUserRouter);
app.use("/api", SendPackRouter);
app.use("/api", ProductsRouter);
app.use('/api', addressRouter);
app.use('/api', cartRouter);
//app.use('/api', LoginUserRouter);



// app.use('/api/products', ProductsRouter);

// Start the server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});


// const express = require('express');
// const app = express();
// const port = 5002;
// const mongoDB = require('./db');
// const cors = require('cors');
// const User = require('./models/User'); // Import the User model
// const jwt = require('jsonwebtoken');

// // Connect to MongoDB
// mongoDB();

// // Middleware
// app.use(express.json());
// app.use(cors()); // Enable CORS for all routes

// // Routes
// app.get('/', (req, res) => {
//   res.send('App working');
// });

// // Authentication Endpoint for User Login
// app.post('/api/auth/login', async (req, res) => {
//   try {
//     // Find the user in the database by email
//     const user = await User.findOne({ email: req.body.email });

//     // If user doesn't exist, return error
//     if (!user) {
//       return res.status(400).json({ success: false, message: "Invalid email or password" });
//     }

//     // Check if the password is correct
//     const isPasswordValid = await user.isValidPassword(req.body.password);

//     if (!isPasswordValid) {
//       return res.status(400).json({ success: false, message: "Invalid email or password" });
//     }

//     // If email and password are correct, generate a JWT token
//     const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });

//     // Return success response with token
//     res.status(200).json({ success: true, token });
//   } catch (error) {
//     console.error("Error during login:", error);
//     return res.status(500).json({ success: false, message: "Internal server error" });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`App listening on http://localhost:${port}`);
// });
