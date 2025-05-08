const express = require('express');
const userController = require('../../controllers/userController');
const Auth = require('../../middleware/auth');

const userRoute = express.Router();

userRoute.get('/dashboard', Auth('user'), userController.Dashboard);

module.exports = userRoute;