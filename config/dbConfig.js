const mongoose = require("mongoose");

const db = mongoose.connect('mongodb://0.0.0.0:27017/mydatabase').then(() =>{
    console.log("Database connect");
}).catch(err => {
    console.log("Error", err);
});

module.exports = db;