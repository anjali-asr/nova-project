const { createDiscount, getDiscount, updateDiscount, deleteDiscount } = require('../controller/discount.controller');
const express = require("express");
const route = express.Router();

route.post('/', createDiscount);
route.get('/', getDiscount);
route.put('/', updateDiscount);
route.delete('/', deleteDiscount);

module.exports = route;