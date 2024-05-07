const mongoose = require('mongoose');
const {Schema} = mongoose;

const cartItemSchema = new Schema({
    item: {
        type: String, 
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('cartitems', cartItemSchema);
