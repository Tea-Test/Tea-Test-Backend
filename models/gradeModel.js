const mongoose = require("mongoose");

const gradeSchema = mongoose.Schema({
    grade: { type: String },
    size: { type: String }
    // secondName: { type: String},
    // email: { type: String  },
    // password: { type: String },
    // image: {type: String}

 });

module.exports = mongoose.model('Grade', gradeSchema);
