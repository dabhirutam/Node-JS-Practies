const authModel = require("../models/authModel");
const fs = require('fs');

const Dashboard = (req, res) => res.render('admin/dashboard');

const Profile = (req, res) => res.render('admin/profile');

const UpadateProfile = async (req, res) => {
    authData = { ...req.body, avatar: req.file.path ? req.file.path : req.user.avatar };

    try {
        req.file.path && req.user.avatar && fs.unlinkSync(req.user.avatar);
        await authModel.findByIdAndUpdate(req.user._id, authData);

        console.log("Admin profile updated.");
        res.redirect('profile');
    } catch (error) { console.log("Server Error", error) }
}

module.exports = {
    Dashboard,
    Profile,
    UpadateProfile
}