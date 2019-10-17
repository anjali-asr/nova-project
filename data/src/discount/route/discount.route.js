const { createDiscount, getDiscount, updateDiscount, deleteDiscount } = require('../controller/discount.controller');
const { adminAuth, managerAuth, commonAuth } = require("../../../middleware/authorization");
const express = require("express");
const route = express.Router();

route.post('/', createDiscount);
route.get('/', getDiscount);
route.put('/', updateDiscount);
route.delete('/', deleteDiscount);

module.exports = route;