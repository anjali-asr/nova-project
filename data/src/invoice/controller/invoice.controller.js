const { createInvoice, getInvoice, updateInvoice, deleteInvoice } = require('../business/invoice.business');

exports.createInvoice = async (req, res) => {
    try {
        let r = await createInvoice(req.body);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.getInvoice = async (req, res) => {
    try {
        let r = await getInvoice(req.query);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.updateInvoice = async (req, res) => {
    try {
        let r = await updateInvoice(req.body, req.query.id);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.deleteInvoice = async (req, res) => {
    try {
        let r = await deleteInvoice(req.query.id);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};