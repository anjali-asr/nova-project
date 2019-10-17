const { Cart } = require("../model/cart.model");
const { msg } = require('../../../messages/message');

//Add categories by admin
let createCart = async (req) => {
    let data = req.body;
    // if(!req.body) data ={};
    let cart = new Cart(data);
    let result = await cart.save();
    if (!result) msg.notCreated;
    return result;
};

//Get Cart for prticular user
let getCart = async (userId) => {

};

//update cart by perticulr user
let updateCart = async (data, userId) => {

};

module.exports = { createCart };