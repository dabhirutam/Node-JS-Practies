const jwt = require("jsonwebtoken");
const authModel = require("../models/authModel");

const Auth = async (req, res, next) => {
    const token = req.cookies.token;
    const decode = jwt.verify(token, 'web_token');

    const auth = await authModel.findById(decode._id);
}

module.exports = Auth;