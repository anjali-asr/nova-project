const { addProduct, getProduct, updateProduct, deleteProduct } = require('../controller/product.controller');
const { adminAuth, managerAuth, commonAuth } = require("../../../middleware/authorization");

const express = require("express");
const route = express.Router();
const multer = require("multer");

var storage = multer.diskStorage({
    destination: 'public/images/productImages',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({ storage: storage });


route.post('/',adminAuth, upload.array("images"), addProduct);
route.get('/', getProduct);
route.put('/', adminAuth, updateProduct);
route.delete('/',adminAuth, deleteProduct);

module.exports = route;