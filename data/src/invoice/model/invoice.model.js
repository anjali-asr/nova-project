const mongoose = require("mongoose");

let invoiceSchema = new mongoose.Schema({
    invoiceNumber: String,
    employeeId: String,
    date: Date,
    productsSold: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }],
    discount: Number,
    vat: Number,
    total: Number
});

let Invoice = mongoose.model("Order", invoiceSchema);

module.exports = { Invoice };