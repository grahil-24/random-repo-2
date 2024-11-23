const mongoose = require('mongoose');

const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    }catch (err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
