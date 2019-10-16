const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
    name: String,
    images: Array,
    // category: mongoose.Schema.Types.ObjectId,
    category: String,
    mrp : Number,
    vat: Number,
    totalPrice : Number,
    discount : Number,
    totalPayablePrice :Number
});

let Products = mongoose.model("Products", productSchema);

module.exports = { Products };