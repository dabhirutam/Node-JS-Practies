const authModel = require("../models/authModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//SignUp
const ViewSignUp = (req, res) => {
    res.render('auth/signUp');
}

const SignUp = async (req, res) => {
    const { name, email, password, role } = req.body;

    const auth = await authModel.findOne({email});

    if(auth) return console.log("User is allready exist, try another email.");
    

    try {
        const userData = await new authModel({
            name,
            email,
            password: await bcrypt.hash(password, 10),
            role
        });

        await userData.save();

        console.log("User is crated successfully.");

        res.redirect('signIn');
    } catch (error) {
        console.log("Server Error", error);
    }
}

//SignIn
const ViewSignIn = (req, res) => {
    res.render('auth/signIn');
}

const SignIn = async (req, res) => {
    const { email, password } = req.body;    

    const user = await authModel.findOne({ email });

    if (!user) {
        return console.log("User is don't exist.");
    }

    const verify = await bcrypt.compare(password, user.password);

    if (verify) {
        token = jwt.sign({ _id: user._id, role: user.role }, 'web_token');
        res.cookie('token', token, { maxAge: 1000 * 60 * 60, expire: true, httpOnly: true });
        console.log(`${user.role} SignIn successfuly.`);

        user.role === 'admin' ? res.redirect('/admin/dashboard') : res.redirect('/user/dashboard');
    } else {
        return console.log("Password in not match please enter valid passwod.");
    }
}

const SignOut = (req, res) => {
    res.clearCookie('token');
    res.redirect('signIn');
}

module.exports = { ViewSignUp, SignUp, ViewSignIn, SignIn, SignOut }