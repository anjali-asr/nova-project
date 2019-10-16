const { addProduct } = require('../controller/product.controller');
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
// var upload = multer({ dest: 'uploads/' });

route.post('/', upload.array("images"), addProduct);

module.exports = route;