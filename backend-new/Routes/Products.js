const express = require("express");
const router = express.Router();
const Product = require("../models/ProductItem");

// POST route for creating a new product
router.post("/products", async (req, res) => {
    try {
        // Create a new product using data from the request body
        await Product.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            image: req.body.image
        });
        res.json({ success: true, message: "Product created successfully" });
    } catch (err) {
        console.error(err);
        res.json({ success: false, message: "Failed to create product" });
    }
});

module.exports = router;

