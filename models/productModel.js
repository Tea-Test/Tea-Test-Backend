const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    no: {type: String, required: true, unique: true},
    category: {type: String, required: true}, //sl, st, en
    name: { type: String, required: true },
    brand: { type: String, required: true },
    company: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String },
    description: { type: String, required: true}

 });

module.exports = mongoose.model('Product', productSchema);