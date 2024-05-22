const mongoose = require("mongoose");

const gradeSchema = mongoose.Schema({
    grade: { type: String },
    health: { type: String },
    brew: {type: String},
    time: {type: String},
    wec: {type: String},
    caffeine: {type: String}

 });

module.exports = mongoose.model('Grade', gradeSchema);
