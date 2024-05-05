const express = require("express");
const router = express.Router();
const Package = require("../models/SendPackage");

// POST route for creating a new package
router.post("/sendpackage", async (req, res) => {
    try {
        // Create a new package using data from the request body
        await Package.create({
            pickupLocation: req.body.pickupLocation,
            dropLocation: req.body.dropLocation,
            deliveryInstructions: req.body.deliveryInstructions
        });
        res.json({ success: true, message: "Package sent successfully" });
    } catch (err) {
        console.error(err);
        res.json({ success: false, message: "Failed to send package" });
    }
});

module.exports = router;