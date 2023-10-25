const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    category: String
}, { collection: 'Marketplace.Product' });  // Specifying the collection name

module.exports = mongoose.model('Product', productSchema);
