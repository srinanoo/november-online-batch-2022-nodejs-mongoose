const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to MongoDB Successfully');
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = { connectToMongoDB };