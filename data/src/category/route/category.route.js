const { addCategory, addProdInCategory, getCategory,  deleteCategory } = require('../controller/category.controller');

const express = require("express");
const route = express.Router();
 

route.post('/', addCategory);
route.put('/', addProdInCategory);
route.get('/', getCategory);
route.delete('/', deleteCategory);

module.exports = route;