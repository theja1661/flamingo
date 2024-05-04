const mongoose = require('mongoose');

const { Schema } = mongoose;

const SendPackageSchema = new Schema(
    {
        pickupLocation: {
            type: String,
            required: true
        },
        dropLocation: {
            type: String,
            required: true
        },
        deliveryInstructions: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model('SendPackage', SendPackageSchema);
