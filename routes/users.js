// Importing the mongoose library
const mongoose = require('mongoose');

// Defining the Subscription Schema
const userSchema = new mongoose.Schema({
    // Email field with validation for required and uniqueness
    email: {
        type: String,
        required: true,
        unique: true
    },
    // Categories field, an array of subscribed categories with a default empty array
    categories: {
        type: [String],
        default: []
    }
});

// Creating the User model using the defined schema
const userModel = mongoose.model('user', userSchema);

// Exporting the User model for use in other files
module.exports = {
    userModel
};
