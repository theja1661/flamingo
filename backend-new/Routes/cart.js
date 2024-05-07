const express = require("express");
const router = express.Router();
const CartItem = require("../models/CartItems"); // Corrected model import

// POST route for adding items to the cart
router.post("/cartitems", async (req, res) => {
    try {
        // Extract cart item data from the request body
        const { item, quantity, title, price, total } = req.body;

        // Create a new cart item using the extracted data
        await CartItem.create({
            item,
            quantity,
            title,
            price,
            total
        });

        res.json({ success: true, message: "Item added to cart successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to add item to cart" });
    }
});

// GET route to retrieve all items from the cart
router.get("/cartitems", async (req, res) => {
    try {
        // Retrieve all cart items from the database
        const cartItems = await CartItem.find();

        res.json({ success: true, cartItems });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to retrieve cart items" });
    }
});

// DELETE route to remove an item from the cart
router.delete("/cart/:id", async (req, res) => {
    try {
        const itemId = req.params.id;

        // Find and delete the cart item by its ID
        await CartItem.findByIdAndDelete(itemId);

        res.json({ success: true, message: "Item removed from cart successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to remove item from cart" });
    }
});

module.exports = router;
