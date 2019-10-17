const { createOrder, getOrder, updateOrder, deleteOrder } = require('../controller/order.controller');
const { adminAuth, managerAuth, commonAuth } = require("../../../middleware/authorization");

const express = require("express");
const route = express.Router();


route.post('/', adminAuth, createOrder);
route.get('/',  getOrder);
route.put('/', adminAuth, updateOrder);
route.delete('/', adminAuth, deleteOrder);

module.exports = route;