const { addCategory, addProdInCategory, getCategory,  deleteCategory} = require('../business/category.business');

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

exports.getCategory = async (req, res) => {
    try {
        let r = await getCategory(req.query.id);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        let r = await deleteCategory(req.query.id);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};