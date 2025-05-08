const express = require('express');
const adminController = require('../../controllers/adminController');
const Auth = require('../../middleware/auth');

const adminRoute = express.Router();

adminRoute.get('/dashboard', Auth('admin'), adminController.Dashboard);

module.exports = adminRoute;