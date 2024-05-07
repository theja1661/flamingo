// Example using Express.js
const express = require('express');
const router = express.Router();
const User = require("../models/User");

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the email exists in the web_users collection
  const user = await User.findOne({ email });

  if (!user || !user.isValidPassword(password)) {
    return res.status(401).json({ success: false, message: "Invalid email or password" });
  }

  // If the email and password are correct, generate a JWT token
  const token = generateToken(user);

  res.json({ success: true, authToken: token });
});

// Other routes and middleware...

module.exports = router;
app.listen(5002, () => console.log('Server running on port 5002'));
