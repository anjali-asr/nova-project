const { createUser, getUser } = require('../controller/user.controller');
const express = require("express");
const route = express.Router();
const multer = require("multer");
 

var storage = multer.diskStorage({ 
  //dfsdfdf
    destination: (req, file, cb) => {
      cb(null, 'public/images/userImg')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});
// var upload = multer({ dest: 'uploads/' });

route.post('/', upload.single("image"), createUser);
route.get('/', getUser);

module.exports = route;