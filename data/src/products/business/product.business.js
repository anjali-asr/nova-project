const { Products } = require('../model/product.model');
const {Categories} = require('../../category/model/category.model');
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

//Get product list for manager 
exports.getProductList = async (req) => {
    let query = req.query;
    // if(roleId != 1 || roleId!=2) throw msg.notAuthenticated;
    let result = await Products.aggregate([{
        $group: {
            _id: "$category",
            category : query.category
        }
    }]);


};

//get list of products by categry id
exports.productListByCategory = async (id) => {  //here "id" is category _id
    let res = await Categories.findById(id).lean().populate("products");
    if (!res) msg.notExist;
    let result = res.products;
    return result;
};

//Get product all/by id
exports.getProduct = async (req) => {

};

//Update product by Admin
exports.updateProduct = async (req) => {

};

//delete product 
exports.deleteProduct = async (req) => {

};
