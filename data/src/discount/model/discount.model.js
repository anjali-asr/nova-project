const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema({
    "code": String,
    "percentDiscount": String,
    "maxDiscount": Number,  //i.e. max 100 rupees off
    "maxOrderAmount": Number, //code will be applicable only if order amount will be greater than "maxOrderAmount"
    "isApplicable": {
        type: Boolean,
        default: true
    }
},
    {
        versionKey: false
    }
);

const Discount = mongoose.model('Discount', discountSchema);
module.exports = { Discount };