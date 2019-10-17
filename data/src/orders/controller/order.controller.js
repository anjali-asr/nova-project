const { createOrder, getOrder, updateOrder, deleteOrder, checkout } = require('../business/orders.business');

exports.createOrder = async (req, res) => {
    try {
        let r = await createOrder(req.body);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.getOrder = async (req, res) => {
    try {
        let r = await getOrder(req.query.id);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.updateOrder = async (req, res) => {
    try {
        let r = await updateOrder(req.query.id, req.body);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        let r = await deleteOrder(req.query.id);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};