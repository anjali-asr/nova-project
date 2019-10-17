const { createDiscount, getDiscount, updateDiscount, deleteDiscount } = require('../business/discount.business');

exports.createDiscount = async (req, res) => {
    try {
        let r = await createDiscount(req.body);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.getDiscount = async (req, res) => {
    try {
        let r = await getDiscount(req.query);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.updateDiscount = async (req, res) => {
    try {
        let r = await updateDiscount(req.body, req.query.id);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.deleteDiscount = async (req, res) => {
    try {
        let r = await deleteDiscount(req.query.id);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};