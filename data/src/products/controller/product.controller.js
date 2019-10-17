const { addProduct, getProduct, updateProduct, deleteProduct } = require('../business/product.business');

exports.addProduct = async (req, res) => {
    try {
        let r = await addProduct(req.body, req.files);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.getProduct = async (req, res) => {
    try {
        let r = await getProduct(req.query);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.updateProduct = async (req, res) => {
    try {
        let r = await updateProduct(req.query.id, req.body);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        let r = await deleteProduct(req.query.id);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};