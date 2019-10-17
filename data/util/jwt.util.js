var jwt = require("jsonwebtoken");
let jwt_secret = "i_am_a_secret_key";

/**
 * used to generate JWT token
 * @param data 
 */
const jwtTokenGenerator = async (data) => {
    data["currentTime"] = Date.now();
    return await jwt.sign(data || {}, jwt_secret);
}

/**
 * used to verify and parse data from JWT token
 * @param data 
 */
const jwtTokenVerifier = async (data) => {
    try {
        let token = data || "";
        let tokenData = jwt.verify(token, jwt_secret);
        if (!tokenData) return { failed: true };
        return { failed: false, tokenData };
    } catch (err) {
        return { failed: true };
    }
}

module.exports = { jwtTokenGenerator, jwtTokenVerifier } ;