const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
    prodId: mongoose.Schema.Types.ObjectId,
    quantity: Number
});

let orderSchema = new mongoose.Schema({
    user: mongoose.Schema.Types.ObjectId,
    discount: Number,
    vat: Number,
    totalMrp: Number,
    subTotal: Number,
    totalPrice: Number,
    totalPayableAmount: Number,  //final payable amount
    products: [productSchema],
});

let Orders = mongoose.model("Orders", orderSchema);

module.exports = { Orders };