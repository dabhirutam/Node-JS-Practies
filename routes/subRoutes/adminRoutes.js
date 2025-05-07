const express = require('express');
const adminController = require('../../controllers/adminController');

const adminRoute = express.Router();

adminRoute.get('/dashboard', adminController.Dashboard);

module.exports = adminRoute;