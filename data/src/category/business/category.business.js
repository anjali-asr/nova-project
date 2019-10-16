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

//get list of  by categry name
exports.productListByCategory = async (id) => {  //here "id" is category _id
    let res = await Categories.findById(id).lean().populate("products");
    if (!res) msg.notExist;
    let result = res.products;
    return result;
};
