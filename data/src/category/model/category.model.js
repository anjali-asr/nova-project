const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    products: [mongoose.Schema.prototype.ObjectId]
}, 
    {
        versionKey: false
    }
);

const Categories = mongoose.model('categoriees', categorySchema);
module.exports = { Categories };