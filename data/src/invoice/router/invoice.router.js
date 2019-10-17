const { createInvoice, getInvoice, updateInvoice, deleteInvoice } = require('../controller/invoice.controller');
const express = require("express");
const route = express.Router();

route.post('/', createInvoice);
route.get('/', getInvoice);
route.put('/', updateInvoice);
route.delete('/', deleteInvoice);

module.exports = route;