const authModel = require("../models/authModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Register
const ViewRegister = (req, res) => {
    res.render('auth/register', { msg: req.flash('Register')[0] });
}

const Register = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const userData = new authModel({
            name,
            email,
            password: await bcrypt.hash(password, 10),
            role
        });

        userData.save();

        console.log("User is crated successfully.");

        res.redirect('logIn');
    } catch (error) {
        console.log("Server Error", error);
    }
}

//LogIn
const ViewLogIn = (req, res) => {
    res.render('auth/logIn');
}

const LogIn = async (req, res) => {
    const { email, password } = req.body;

    const user = await authModel.findOne({ email });

    if (!user) {
        return console.log("User is don't exist.");
    }

    const verify = await bcrypt.compare(password, user.password);

    if (verify) {
        token = jwt.sign({ _id: user._id, role: user.role }, 'web_token');
        res.cookie('token', token, { maxAge: 1000 * 60 * 60, expire: true, httpOnly: true });
        console.log(`${user.role} logIn successfuly.`);

        user.role === 'admin' ? res.redirect('/admin/dashboard') : res.redirect('/user/dashboard');
    } else {
        return console.log("Password in not match please enter valid passwod.");
    }
}

const SignOut = (req, res) => {
    res.clearCookie('token');
    res.redirect('logIn');
}

module.exports = { ViewRegister, Register, ViewLogIn, LogIn, SignOut }