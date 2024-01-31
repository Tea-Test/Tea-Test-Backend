const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
    no: {type: String, required: true, unique: true},
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true}

 });

module.exports = mongoose.model('News', newsSchema);

