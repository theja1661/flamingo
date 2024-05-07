const mongoose = require('mongoose');
const {Schema} = mongoose;
const AddressSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Address', AddressSchema);
