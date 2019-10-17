const { Orders } = require('../model/orders.model');
const { msg } = require('../../../messages/message');

//Checkout function to calculate the price of order
let checkout = async () => {

};

//Create new order
let createOrder = async (data) => {
    let ord = new Orders(data);
    let res = await ord.save();
    if (!res) msg.notCreated;
    return res;
};

//Get order details for perticular user
let getOrder = async (id) => {
    if (id == undefined || id == null) throw msg.enterValidId;
    let res = await Orders.find(id).lean();
    return res;
};

let updateOrder = async (id, data) => {
    if (id == undefined || id == null) throw msg.enterValidId;
    let res = await Orders.findByIdAndUpdate(id, { $set: data }, { new: true }).lean();
    return res;
};

let deleteOrder = async (id) => {
    if (id == undefined || id == null) throw msg.enterValidId;
    await Orders.findByIdAndDelete(id).lean();
    return { message: "removed successfully" };
};

module.exports = { createOrder, getOrder, updateOrder, deleteOrder, checkout };
