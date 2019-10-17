const { createUser, getUser, userLogin } = require('../business/user.business');


exports.createUser = async (req, res) => {
    try {
        let r = await createUser(req);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.getUser = async (req, res) => {
    try {
        let r = await getUser(req);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.userLogin = async (req, res) => {
    try {
        let r = await userLogin(req);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
}