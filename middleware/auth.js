const jwt = require("jsonwebtoken");
const authModel = require("../models/authModel");

const Auth = (route) => async (req, res, next) => {
    const token = req.cookies.token;

    if(token){
        const decode = jwt.verify(token, 'web_token');
        if(decode){
            req.user = await authModel.findById(decode._id);
            route === 'signIn' ? res.redirect(`/${decode.role}/dashboard`) : next();
        }else{
            route === 'signIn' ? next() : res.redirect('/auth/signIn');;
        }
    }else{
        route === 'signIn' ? next() : res.redirect('/auth/signIn');;
    }
}

module.exports = Auth;