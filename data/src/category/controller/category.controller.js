const { addCategory, addProdInCategory, productListByCategory } = require('../business/category.business');

exports.addCategory = async (req, res) => {
    try {
        let r = await addCategory(req.body);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.addProdInCategory = async (req, res) => {
    try {
        let r = await addProdInCategory(req.body, req.query.id);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.productListByCategory = async (req, res) => {
    try {
        let r = await productListByCategory(req.query.id);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};