const { Users } = require('../src/users/model/users.model');
let jwt_secret = "i_am_a_secret_key";
let jwt = require("jsonwebtoken");

exports.adminAuth = async (req, res, next) => {
    try {
        const rowtoken = req.headers['authorization'] || req.headers['Authorization'];
        if (!rowtoken) return res.status(400).send("Authorization token was not provided in header");

        const token = rowtoken.toString().replace("Bearer", "").trim();
        if (!token) return res.status(400).send("Invalild session token");

        const tokenInfo = await jwt.verify(token, jwt_secret);
        console.log({ tokenInfo });
        let userData = await Users.findOne({ _id: tokenInfo["_id"] || "", roleId: 1 }).lean();
        if (!userData) return res.status(400).send("Invalild session token");

        res.locals.userData = userData;
        res.locals.tokenInfo = tokenInfo; //store the token info for the further use in other routes
        next();
    } catch (err) {
        console.log({ err });
        return res.status(400).send("Some error occured");
    }
}


exports.managerAuth = async (req, res, next) => {
    try {
        const rowtoken = req.headers['authorization'] || req.headers['Authorization'];
        if (!rowtoken) return res.status(400).send("Authorization token was not provided in header");

        const token = rowtoken.toString().replace("Bearer", "").trim();
        if (!token) return res.status(400).send("Invalild session token");

        const tokenInfo = await jwt.verify(token, jwt_secret);
        console.log({ tokenInfo });
        let userData = await Users.findOne({ _id: tokenInfo["_id"] || "", roleId: 2 }).lean();
        if (!userData) return res.status(400).send("Invalild session token");

        res.locals.userData = userData;
        res.locals.tokenInfo = tokenInfo; //store the token info for the further fuse in other routes
        next();
    } catch (err) {
        console.log({ err });
        return res.status(400).send("Some error occured");
    }
}


exports.commonAuth = async (req, res, next) => {
    try {
        const rowtoken = req.headers['authorization'] || req.headers['Authorization'];
        if (!rowtoken) return res.status(400).send("Authorization token was not provided in header");

        const token = rowtoken.toString().replace("Bearer", "").trim();
        if (!token) return res.status(400).send("Invalild session token");

        const tokenInfo = await jwt.verify(token, jwt_secret);
        console.log({ tokenInfo });
        let userData = await Users.findOne({ _id: tokenInfo["_id"] || "" }).lean();
        if (!userData) return res.status(400).send("Invalild session token");

        res.locals.userData = userData;
        res.locals.tokenInfo = tokenInfo; //store the token info for the further fuse in other routes
        next();
    } catch (err) {
        console.log({ err });
        return res.status(400).send("Some error occured");
    }
}