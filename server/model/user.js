const mongoose = require('mongoose');
const userSchema =  new mongoose.Schema(
    {
        name:String,
        email:String,
        age: Number,
        location: String
    });
const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;