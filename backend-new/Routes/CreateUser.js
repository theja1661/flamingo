const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/createuser", async (req, res) => {
    try {
        await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        });
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.json({ success: false });
    }
});

module.exports = router;

// http verbs  rest api 