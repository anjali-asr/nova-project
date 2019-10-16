const { addProduct , productListByCategory} = require('../business/product.business');

exports.addProduct = async (req, res) => {
    try {
        let r = await addProduct(req.body, req.files);
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