const { addCategory, addProdInCategory, productListByCategory, getCategory, deleteCategory } = require('../controller/category.controller');
const { adminAuth, managerAuth, commonAuth } = require("../../../middleware/authorization");

const express = require("express");
const route = express.Router();


route.post('/',adminAuth, addCategory);
route.put('/',adminAuth, addProdInCategory);
route.get('/', getCategory);
route.get('/list',commonAuth, productListByCategory);
route.delete('/',adminAuth, deleteCategory);

module.exports = route;