const { createOrder, getOrder, updateOrder, deleteOrder } = require('../controller/order.controller');
const { adminAuth, managerAuth, commonAuth } = require("../../../middleware/authorization");

const express = require("express");
const route = express.Router();


route.post('/', createOrder);
route.get('/', getOrder);
route.put('/', updateOrder);
route.delete('/', deleteOrder);

module.exports = route;