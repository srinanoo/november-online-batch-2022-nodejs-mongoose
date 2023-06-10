const TraineeModel = require('../models/traineeModel');

const showAllTrainees = (req, res) => {
    // res.send("Show all trainees");
    try {
        TraineeModel.find({})
            .then(trainees => {
                res.json(trainees);
            });

        // TraineeModel.find({}, (trainees) => {
        //     res.json(trainees);
        // });
    } catch (err) {
        res.json(err.message);
    }
};

const showTrainee = (req, res) => {
    // res.send("Show trainee");
    try {
        TraineeModel.find({$or: [{"name": req.body.name}, {"age": req.body.age}]})
            .then(trainees => {
                res.json(trainees);
            });

        // TraineeModel.find({}, (trainees) => {
        //     res.json(trainees);
        // });
    } catch (err) {
        res.json(err.message);
    }
};

const addTrainee = (req, res) => {
    res.send("Add Trainee - from Routes");
};

const updateTrainee = (req, res) => {
    res.send("Update Trainee - from Routes");
};

const deleteTrainee = (req, res) => {
    res.send("Delete Trainee - from Routes");
};

module.exports = {
    showAllTrainees,
    showTrainee,
    addTrainee,
    updateTrainee,
    deleteTrainee
}