const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Route to remove a user by their ID
router.delete("/removeuser/:id", async (req, res) => {
    try {
        // Find the user by ID and delete them
        const user = await User.findByIdAndDelete(req.params.id);
        
        // Check if the user was found and deleted
        if (user) {
            res.json({ success: true });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

module.exports = router;
