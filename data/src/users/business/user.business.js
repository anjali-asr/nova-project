const { Users } = require('../model/users.model');
const {msg} = require('../../../messages/message');
const _ = require('lodash');

let commonArr = [
    "firstName",
    "lastName",
    "gender",
    "DOB",
    "address",
    "phone",
    "image"
];

//User sighup 
let createUser = async (req) => {
    let data = req.body;
    if (req.file) data.image = req.file.path;
    let user = new Users(data);
    let result = await user.save();
    let res = _.pick(result, [...commonArr, "_id", "email"]);
    if(!res) throw msg.userNotCreated;
    return res;
};

//Get user info fo
let getUser = async (req) => {
    let id = req.query.id;
    let result = await Users.findById(id);
    let res = _.pick(result, [...commonArr, "email"]);
    return res;
};

//update user information
let updateUser = async (req) => {
    let id = req.query.id;
    let data = _.pick(req.body, [...commonArr], "password");
    let result = await Users.findByIdAndUpdate(id, { $set: data });
    return result;
};

module.exports = {createUser, getUser, updateUser};