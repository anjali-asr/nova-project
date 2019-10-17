const { Categories } = require("../model/category.model");
const { msg } = require('../../../messages/message');

//Add categories by admin
exports.addCategory = async (data) => {
    let cate = new Categories(data);
    let result = await cate.save();
    if (!result) msg.categoryNotAdded;
    return result;
};

//Add products in category
exports.addProdInCategory = async (data, id) => { //here "id" is category _id
    let res = await Categories.findByIdAndUpdate(id, { $push: { products: data.products } }, { new: true }).lean();  //save the product id's in products array
    if (!res) msg.notExist;
    return res;
};

//get list of products by categry id
exports.productListByCategory = async (id) => {  //here "id" is category _id
    let res = await Categories.findById(id).lean().populate("products");
    if (!res) msg.notExist;
    let result = res.products;
    return result;
};

//get category by _id
exports.getCategory = async (id) => {  //here "id" is category _id
    let res = await Categories.findById(id).lean();
    if (!res) msg.notExist;
    return res;
};

//Delete category by category _id (by Admin)
exports.deleteCategory = async (id) => {  //here "id" is category _id
    let res = await Categories.findByIdAndDelete(id);
    if (!res) msg.notExist;
    return {message : "OK"};
};