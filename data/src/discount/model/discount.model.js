const mongoose = require("mongoose");

//As its is given that admin can apply discounts to the product, Employee cannot apply discounts

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