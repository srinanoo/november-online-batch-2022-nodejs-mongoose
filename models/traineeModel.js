const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');

conn.connectToMongoDB();

const traineeSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter the Trainee Name"]
    },
    username: {
        type: String,
        required: [true, "Please enter the Username"]
    },
    password: {
        type: String,
        required: [true, "Please enter the Password"]
    },
    phone: {
        type: Number
    },
    subjects: {
        type: String,
        enum: ["HTML", "CSS", "JS", "ReactJS", "NodeJS", "MongoDB"]
    },
    batch: {
        type: String
    },
    timings: {
        type: String
    },
    year: {
        type: Number
    },
    active: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now()
    },
    age: {
        type: Number
    }
});

const TraineeCollection = mongoose.model("trainee", traineeSchema);

module.exports = TraineeCollection;