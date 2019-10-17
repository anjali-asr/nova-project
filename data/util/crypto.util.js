var { createHmac } = require("crypto");
var SALT = "i_am_salt";

const hashPassword = (text) => {
    return new Promise((resolve, reject) => {
        const hash = createHmac('sha256', SALT);
        hash.update(text.toString());
        resolve(hash.digest('hex'));
    })
}

module.exports = { hashPassword };