const { createDiscount, getDiscount, updateDiscount, deleteDiscount } = require('../controller/discount.controller');
const { adminAuth, managerAuth, commonAuth } = require("../../../middleware/authorization");
const express = require("express");
const route = express.Router();

route.post('/', adminAuth, createDiscount);
route.get('/', getDiscount);
route.put('/',adminAuth, updateDiscount);
route.delete('/',adminAuth, deleteDiscount);

module.exports = route;