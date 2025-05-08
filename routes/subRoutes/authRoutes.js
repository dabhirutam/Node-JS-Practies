const express = require('express');
const authController = require('../../controllers/authController');
const Auth = require('../../middleware/auth');

const authRoute = express.Router();

//Register
authRoute.get('/register', authController.ViewRegister);
authRoute.post('/register', authController.Register);

//LogIn
authRoute.get('/logIn', Auth('logIn'), authController.ViewLogIn);
authRoute.post('/logIn', authController.LogIn);

//Sign Out
authRoute.get('/signOut', authController.SignOut);

module.exports = authRoute;