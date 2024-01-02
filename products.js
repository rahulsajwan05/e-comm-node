const mongoose = require('mongoose');    

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    brand: String,
},{collection:'product'});

module.exports = mongoose.model('product', productSchema);