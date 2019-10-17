const { Users } = require('../model/users.model');
const {msg} = require('../../../messages/message');
const _ = require('lodash');
const { hashPassword } = require("../../../util/crypto.util");
const { jwtTokenGenerator } = require("../../../util/jwt.util");

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
    if (data.password) {
        data.password = await hashPassword(data.password);
    }
    let user = new Users(data);
    let result = await user.save();
    let res = _.pick(result, [...commonArr, "_id", "email"]);
    if(!res) throw msg.userNotCreated;
    return res;
};

//User login
let userLogin = async (req) => {
    let { email, password } = req.body;
    let hashedPassword = await hashPassword(password);
    let user = await Users.findOne({
        email,
        password: hashedPassword
    }).lean();
    if (!user) {
        throw msg.invalidCredentials;
    }
    return {
        token: await jwtTokenGenerator({ _id: user._id.toString(), roleId: user.roleId, userType: user.userType })
    }
};

//Get user info
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

module.exports = {createUser, getUser, updateUser, userLogin};