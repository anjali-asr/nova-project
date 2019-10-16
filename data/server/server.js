const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const userRoute = require('../src/users/route/user.route');
const productRout = require('../src/products/route/product.route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.use('/user', userRoute);
app.use('/product', productRout);

let url = "mongodb://localhost:27017/helloDB";
mongoose.connect(url, (error) => {
    if (error) console.log("Error in DB connection is " + error);
    console.log("DB connected successfully....")
})


app.listen(3000, () => {
    console.log("Server has been started successfully....");
});