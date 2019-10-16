const mongoose = require("mongoose");


let orderSchema = new mongoose.Schema({
    user: mongoose.Schema.Types.ObjectId,
    discount: Number,
    vat: Number,
    subTotal: Number,
    total: Number,  //final payable amount
});

let Order = mongoose.model("Order", orderSchema);

module.exports = { Order };