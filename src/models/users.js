const mongoose = require('mongoose');

const register = mongoose.Schema({
     id:{
        type: String,
        unique: true,
        require: true,
     },
     name:{
        type: String,
        require: true,
     },
     email:{
        type: String,
        unique: true,
        require: true,
     },
     mobile:{
        type: Number,
        unique: true,
        require: true,
     },
     password: {
        type: String,
        require: true,
     },
     dateadded:{
        type: Date,
        default: Date.now,
     }
     
    });

   module.exports = mongoose.model("users", register); 