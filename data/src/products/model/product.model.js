const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
    name: String,
    description: String,
    images: Array,
    price: Number,
    perDiscount: Number,   //In percentage
    // discount: mongoose.Schema.Types.ObjectId,  //One discount at a time on any product
},
    {
        versionKey: false
    }
);

let Products = mongoose.model("Products", productSchema);

module.exports = { Products };