const { createInvoice, getInvoice, updateInvoice, deleteInvoice } = require('../controller/invoice.controller');
const { adminAuth, managerAuth, commonAuth } = require("../../../middleware/authorization");
const express = require("express");
const route = express.Router();

route.post('/',commonAuth, createInvoice);
route.get('/', getInvoice);
route.put('/',commonAuth, updateInvoice);
route.delete('/',commonAuth, deleteInvoice);

module.exports = route;