const { addProduct, getProduct, updateProduct, deleteProduct } = require('../controller/product.controller');
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


route.post('/', upload.array("images"), addProduct);
route.get('/', getProduct);
route.put('/', updateProduct);
route.delete('/', deleteProduct);

module.exports = route;