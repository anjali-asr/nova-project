const {createCart} = require('../controller/cart.controller');

const express = require("express");
const route = express.Router();
 

route.post('/', createCart);

module.exports = route;