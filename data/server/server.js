const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const userRoute = require('../src/users/route/user.route');
const productRoute = require('../src/products/route/product.route');
const categoryRoute = require('../src/category/route/category.route');
const cartRoute = require('../src/cart/route/cart.route');
const discoRoute = require('../src/discount/route/discount.route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/api/user', userRoute);
app.use('/api/product', productRoute);
app.use('/api/category', categoryRoute);
app.use('/api/cart', cartRoute);
app.use('/api/discount', discoRoute);

let url = "mongodb://localhost:27017/helloDB";
mongoose.connect(url, (error) => {
    if (error) console.log("Error in DB connection is " + error);
    console.log("DB connected successfully....")
});

app.listen(3000, () => {
    console.log("Server has been started successfully....");
});