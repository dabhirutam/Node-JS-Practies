const jwt = require("jsonwebtoken");
const authModel = require("../models/authModel");

const Auth = (route) => async (req, res, next) => {
    const token = req.cookies.token;

    if(token){
        const decode = jwt.verify(token, 'web_token');
        if(decode){
            req.user = await authModel.findById(decode._id);
            route === 'logIn' ? res.redirect(`/${decode.role}/dashboard`) : next();
        }else{
            route === 'logIn' ? next() : res.redirect('/auth/logIn');;
        }
    }else{
        route === 'logIn' ? next() : res.redirect('/auth/logIn');;
    }
}

module.exports = Auth;