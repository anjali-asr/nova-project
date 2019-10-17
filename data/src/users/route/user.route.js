const { createUser, getUser, userLogin } = require('../controller/user.controller');
const express = require("express");
const route = express.Router();
const multer = require("multer");
const { adminAuth, managerAuth, commonAuth } = require("../../../middleware/authorization");
 
//use multer
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
route.post("/login", userLogin);
route.get('/', commonAuth, getUser);

module.exports = route;