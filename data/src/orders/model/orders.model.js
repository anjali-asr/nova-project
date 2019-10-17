const mongoose = require("mongoose");


let orderSchema = new mongoose.Schema({
    user: mongoose.Schema.Types.ObjectId,
    discount: Number,
    vat: Number,
    totalMrp: Number,
    subTotal: Number,
    totalPayableAmount: Number,  //final payable amount
});

let Orders = mongoose.model("Orders", orderSchema);

module.exports = { Orders };