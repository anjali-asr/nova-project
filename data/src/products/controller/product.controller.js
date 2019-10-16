const { addProduct } = require('../business/product.business');

exports.addProduct = async (req, res) => {
    try {
        let r = await addProduct(req.body, req.files);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};
