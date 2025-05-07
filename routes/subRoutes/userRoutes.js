const express = require('express');
const userController = require('../../controllers/userController');

const userRoute = express.Router();

userRoute.get('/dashboard', userController.Dashboard);

module.exports = userRoute;