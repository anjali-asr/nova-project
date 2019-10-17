const { Discount } = require('../model/discount.model');
const { msg } = require('../../../messages/message');


exports.createDiscount = async (data) => {
    let dis = new Discount(data);
    let res = await dis.save();
    if (!res) msg.notCreated;
    return res;
};

//Get discount code (by id, by code Or all)
exports.getDiscount = async (query) => { // id is discount _id
    if ("id" in query) {
        query = { "_id": query.id };
    } else if ("code" in query) {
        query = { "code": query.code }
    };
    let res = await Discount.find(query).lean();
    return res; 
};


exports.updateDiscount = async (data, id) => {
    if (id == undefined || id == null) throw msg.enterValidId;
    let res = await Discount.findByIdAndUpdate(id, { $set: data }, { new: true }).lean();
    return res;
};

exports.deleteDiscount = async (id) => {
    if (id == undefined || id == null) throw msg.enterValidId;
    await Discount.findByIdAndDelete(id).lean();
    return { message: "removed successfully" };
};