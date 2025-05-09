const express = require('express');
const adminController = require('../../controllers/adminController');
const Auth = require('../../middleware/auth');
const profileImgs = require('../../middleware/profileImgs');
const blogController = require('../../controllers/blogController');
const blogImgs = require('../../middleware/blogImgs');

const adminRoute = express.Router();

adminRoute.use(Auth('admin'));

adminRoute.get('/dashboard', adminController.Dashboard);

adminRoute.get('/profile', adminController.Profile);
adminRoute.post('/profile', profileImgs.single('avatar'), adminController.UpadateProfile);

adminRoute.get('/addBlog', blogController.ViewAddBlog);
adminRoute.post('/addBlog', blogImgs.single('img'), blogController.AddBlog);

adminRoute.get('/viewBlog', blogController.ViewBlog);

module.exports = adminRoute;