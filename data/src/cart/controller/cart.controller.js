const {createCart} = require('../business/cart.business');

exports.createCart = async (req, res) => {
    try {
        let r = await createCart(req);
        res.status(200).send(r);
    } catch (err) {
        console.log("error is " + err);
        res.status(400).send(err);
    }
};
