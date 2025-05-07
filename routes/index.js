const express = require('express');
const authRoute = require('./subRoutes/authRoutes');
const adminRoute = require('./subRoutes/adminRoutes');
const userRoute = require('./subRoutes/userRoutes');

const routes = express.Router();

routes.use('/auth', authRoute);
routes.use('/admin', adminRoute);
routes.use('/user', userRoute);

module.exports = routes;