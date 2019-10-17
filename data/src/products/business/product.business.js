const { Products } = require('../model/product.model');
const { msg } = require('../../../messages/message');
const _ = require('lodash');

//All product by Admin
exports.addProduct = async (data, files) => {
    if (files) {
        let imgArr = files.map(a => {
            return a.path;
        });
        data.images = imgArr;
    };
    let product = new Products(data);
    let result = await product.save();
    if (!result) throw msg.productNotCreated;
    return result;
};

//Get product all/by id
exports.getProduct = async (query) => {
    if ("id" in query) query = { "_id": query.id };
    let res = await Products.find(query).lean();
    return res;
};

//Update product by Admin
exports.updateProduct = async (id, data, files) => {
    if (id == undefined || id == null) throw msg.enterValidId;
    if (files) {
        let imgArr = files.map(a => {
            return a.path;
        });
        data.images = imgArr;
    };
    let res = await Products.findByIdAndUpdate(id, { $set: data }, { new: true }).lean();
    return res;
};

//delete product 
exports.deleteProduct = async (id) => {
    if (id == undefined || id == null) throw msg.enterValidId;
    await Products.findByIdAndDelete(id).lean();
    return { message: "removed successfully" };
};
