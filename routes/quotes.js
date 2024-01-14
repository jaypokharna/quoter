const mongoose = require('mongoose');

// Connection to MongoDB
mongoose.connect("mongodb+srv://jayp:2012@cluster0.ozimw5y.mongodb.net/quotes");

// Define a common schema for different categories
const quoteSchema = new mongoose.Schema({
    quote: {
        type: String,
    },
    status: {
        type: Boolean,
        default: false,
    },
});

// Create models for different categories using the common schema

// Coding Schema
const codingSchema = new mongoose.Schema(quoteSchema);
const Coding = mongoose.model('coding', codingSchema);

// Sports Schema
const sportsSchema = new mongoose.Schema(quoteSchema);
const Sports = mongoose.model('sports', sportsSchema);

// Fashion Schema
const fashionSchema = new mongoose.Schema(quoteSchema);
const Fashion = mongoose.model('fashion', fashionSchema);

// Business Schema
const businessSchema = new mongoose.Schema(quoteSchema);
const Business = mongoose.model('business', businessSchema);

// Studying for Competitive Exams Schema
const examsSchema = new mongoose.Schema(quoteSchema);
const Exams = mongoose.model('exams', examsSchema);

// Trading Schema
const tradingSchema = new mongoose.Schema(quoteSchema);
const Trading = mongoose.model('trading', tradingSchema);

// Export the models for use in other files
module.exports = {
    Coding,
    Sports,
    Fashion,
    Business,
    Exams,
    Trading,
};
