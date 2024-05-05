const express = require('express');
const router = express.Router();
const ProductItem = require('../models/ProductItem');

// Route to create a new product
router.post('/api/add', async (req, res) => {
    try {
        const { name, description, category, price, image } = req.body;
        // Create a new product using data from the request body
        const newProduct = await ProductItem.create({ name, description, category, price, image });
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});


module.exports = router;
