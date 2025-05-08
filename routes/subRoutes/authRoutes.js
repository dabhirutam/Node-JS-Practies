const express = require('express');
const authController = require('../../controllers/authController');
const Auth = require('../../middleware/auth');

const authRoute = express.Router();

//SignUp
authRoute.get('/signUp', authController.ViewSignUp);
authRoute.post('/signUp', authController.SignUp);

//SignIn
authRoute.get('/signIn', Auth('signIn'), authController.ViewSignIn);
authRoute.post('/signIn', authController.SignIn);

//Sign Out
authRoute.get('/signOut', authController.SignOut);

module.exports = authRoute;