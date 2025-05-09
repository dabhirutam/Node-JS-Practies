const express = require('express');
const adminController = require('../../controllers/adminController');
const Auth = require('../../middleware/auth');
const profileImgs = require('../../middleware/profileImgs');

const adminRoute = express.Router();

adminRoute.use(Auth('admin'));

adminRoute.get('/dashboard', adminController.Dashboard);

adminRoute.get('/profile', adminController.Profile);
adminRoute.post('/profile', profileImgs.single('avatar'), adminController.UpadateProfile);

module.exports = adminRoute;