const express = require("express");
const router = express.Router();
const Address = require("../models/Address");

// POST route for creating a new address
router.post("/address", async (req, res) => {
    try {
        // Create a new address using data from the request body
        await Address.create({
            name: req.body.name,
            phone: req.body.phone,
            locality: req.body.locality,
            address: req.body.address,
            state: req.body.state
        });
        res.json({ success: true, message: "Address added successfully" });
    } catch (err) {
        console.error(err);
        res.json({ success: false, message: "Failed to add address" });
    }
});

module.exports = router;

