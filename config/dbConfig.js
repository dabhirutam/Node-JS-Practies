const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL); 
        console.log("Database connect");
    } catch (error) { console.log("Server Error", error) }
}

module.exports = connectDB;