const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: { type: String },
    secondName: { type: String},
    email: { type: String  },
    password: { type: String },
    

 });

module.exports = mongoose.model('User', userSchema);

//, required: true