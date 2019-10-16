const mongoose = require("mongoose");

let addressSchema = new mongoose.Schema({
    line1: String,
    line2: String,
    city: String,
    pin: String,
    country: String
});

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    roleId: {
        type: Number,   // 0 for normal user, 1 for admin, 2 for manager
        require: true
    },
    userType: {
        type: String,
        enum: ['admin', 'manager', 'user']
    },
    gender: {
        type: String,
        enum: ['M', 'F', 'O']
    },
    address: [addressSchema],
    DOB: Date,
    email: String,
    phone: Number,
    image: String,
    password: {
        type: String,
        require: true
    }
},
    {
        versionKey: false
    }
);

let Users = mongoose.model("User", userSchema);

module.exports = { Users };