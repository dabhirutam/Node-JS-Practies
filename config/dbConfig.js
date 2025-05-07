const mongoose = require("mongoose");

const db = mongoose.connect('mongodb+srv://DabhiRutam:aecc057314f828c1d5b5f4@booksdatabase.r8v9p.mongodb.net/Practies').then(() =>{
    console.log("Database connect");
}).catch(err => {
    console.log("Error", err);
});

module.exports = db;