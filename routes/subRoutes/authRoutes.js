const express = require('express');
const authController = require('../../controllers/authController');

const authRoute = express.Router();

//Register
authRoute.get('/register', authController.ViewRegister);
authRoute.post('/register', authController.Register);

//LogIn
authRoute.get('/logIn', authController.ViewLogIn);
authRoute.post('/logIn', authController.LogIn);

module.exports = authRoute;