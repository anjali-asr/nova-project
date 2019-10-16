const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
    name: String,
    description: String,
    images: Array,
    // category: String,
    mrp: Number,
    vat: Number,
    totalPrice: Number,
    discount: Number,
    totalPayablePrice: Number
},
    {
        versionKey: false
    }
);

let Products = mongoose.model("Products", productSchema);

module.exports = { Products };