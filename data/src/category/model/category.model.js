const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    products: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Products"
    }]
},
    {
        versionKey: false
    }
);

const Categories = mongoose.model('categoriees', categorySchema);
module.exports = { Categories };