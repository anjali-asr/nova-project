const { addCategory, addProdInCategory, productListByCategory } = require('../controller/category.controller');

const express = require("express");
const route = express.Router();
 

route.post('/', addCategory);
route.put('/', addProdInCategory);
route.get('/', productListByCategory);

module.exports = route;