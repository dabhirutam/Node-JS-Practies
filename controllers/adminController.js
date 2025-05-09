const authModel = require("../models/authModel");
const fs = require('fs');

const Dashboard = (req, res) => {    
    res.render('admin/dashboard');
}

const Profile = (req, res) => {    
    console.log("ADMIN", req.user);
    
    res.render('admin/profile');
}

const UpadateProfile = async (req, res) => {    
    console.log("PATH");
    authData = {...req.body, avatar: req.file.path ? req.file.path : req.user.avatar};

    try {
        console.log("PATH-2", authData);
        
        if(req.file.path){
            console.log("PATH-4", req.file);
            req.user.avatar && fs.unlinkSync(req.user.avatar);
            console.log("AVATAR Deleted.");
        }
        console.log("PATH-3");
        await authModel.findByIdAndUpdate(req.user._id, authData);

        console.log("Admin profile updated.");

        res.redirect('profile');
    } catch (error) {
        console.log("ERROR");
        
        console.log("Server Error", error);
    }
}

module.exports = { Dashboard, Profile, UpadateProfile }