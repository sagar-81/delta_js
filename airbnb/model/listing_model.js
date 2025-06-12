const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
    image: {
        type: {
            filename: String,
            url: String
        },
        default: { filename: 'default', url: '../upload/default.jpg' }
    },
    price: {
        require: true,
        type: Number,
        default: 0,
    },
    location: {
        require: true,
        type: String
    },
    country: {
        required: true,
        type: String,
    }
}, { timestamps: true });

const listingModel = mongoose.model('Listing', listingSchema);

module.exports = listingModel;