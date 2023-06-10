const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongoDB = () => {
    mongoose.connect(process.env.MONGODB_URL);

    // const db = mongoose.connection;
    // db.on("error", console.log("Unable to connect to MongoDB"));
    // db.once("open", function() {
    //     console.log("DB Connected Successfully!");
    // });
}

module.exports = { connectToMongoDB };