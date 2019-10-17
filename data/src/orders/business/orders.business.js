const { Orders } = require('../model/orders.model');
const { Products } = require('../../products/model/product.model');
const { msg } = require('../../../messages/message');

//Checkout function to calculate the price of order
let checkout = async (products) => {
    let totalMrp = 0, totalPayableAmount = 0, vat = 0, discount = 0;
    products.forEach(async (a) => {
        let pro = await Products.findById(a.prodId).lean();
        let prodDisc;
        if (pro.perDiscount) {
            prodDisc = pro.price * pro.perDiscount / 100;
        } else { prodDisc = 0 }
        let prod_Price = (pro.price - prodDisc) * a.quantity;
        totalMrp = totalMrp + pro.price;
        discount = discount + prodDisc;
        totalPayableAmount = totalPayableAmount + prod_Price;
    });
    return { totalMrp, totalPayableAmount, discount };
};

//Create new order
let createOrder = async (data) => {
    let totalMrp = 0, totalPayableAmount = 0, vat = 0, discount = 0;
    let prod = data.products;
    prod.forEach(async (a) => {
        let pro = await Products.findById(a.prodId).lean();
        let prodDisc;
        if (pro.perDiscount) {
            prodDisc = pro.price * pro.perDiscount / 100;
        } else { prodDisc = 0 }
        let prod_Price = (pro.price - prodDisc) * a.quantity;
        totalMrp = totalMrp + pro.price;
        discount = discount + prodDisc;
        totalPayableAmount = totalPayableAmount + prod_Price;
    });
    data.totalMrp = totalMrp;
    data.discount = discount;
    data.totalPayableAmount = totalPayableAmount;
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
