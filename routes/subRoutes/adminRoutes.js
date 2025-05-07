const express = require('express');
const adminController = require('../../controllers/adminController');
const Auth = require('../../middleware/auth');

const adminRoute = express.Router();

adminRoute.use(Auth);

adminRoute.get('/dashboard', adminController.Dashboard);

module.exports = adminRoute;