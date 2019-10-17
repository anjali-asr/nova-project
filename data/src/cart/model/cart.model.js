const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
    product: mongoose.Schema.Types.ObjectId,
    quantity: Number,
    size: String
},
    {
        versionKey: false
    }
);

let cartSchema = new mongoose.Schema({
    user: mongoose.Schema.Types.ObjectId,
    products: [productSchema],
    numberOfProduct: Number
});

let Cart = mongoose.model("Cart", cartSchema);

module.exports = { Cart };