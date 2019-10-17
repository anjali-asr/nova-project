const { addCategory, addProdInCategory, productListByCategory, getCategory, deleteCategory } = require('../controller/category.controller');
const { adminAuth, managerAuth, commonAuth } = require("../../../middleware/authorization");

const express = require("express");
const route = express.Router();


route.post('/', addCategory);
route.put('/', addProdInCategory);
route.get('/', getCategory);
route.get('/list', productListByCategory);
route.delete('/', deleteCategory);

module.exports = route;