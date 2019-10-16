const mongoose = require("mongoose");

let cartSchema = new mongoose.Schema({
    name: String,
    image: Array,
    category: String,
    mrp : Number,
    vat: Number,
    totalPrice : Number,
    discount : Number,
    totalPayablePrice :Number
});

let Cart = mongoose.model("Cart", cartSchema);

module.exports = { Cart };