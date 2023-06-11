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

const addTrainee = async (req, res) => {
    // res.send("Add Trainee - from Routes");

    const Trainee = new TraineeModel(req.body);

    try {
        let Trainees = await TraineeModel.find({"username": req.body.username});
            
        if(Trainees.length > 0)
            res.json("Trainee Already Exists!")
        else {
            await Trainee.save();
            res.json("Trainee Added Successfully!");
        }
    } catch (err) {
        let errorList = [];
        if(err.errors) {
            for(let temp in err.errors) {
                errorList.push(err.errors[temp].message);
            }
        }
        res.json(errorList);
    }
};

const updateTrainee = (req, res) => {
    // res.send("Update Trainee - from Routes");

    try {
        TraineeModel.updateOne({"_id": req.body._id}, {$set: req.body})
            .then(results => {
                if(results.modifiedCount > 0) {
                    res.json("Trainee Updated Successfully!");
                } else {
                    res.json("Unable to update the Trainee!");
                }
            });
    } catch (err) {
        res.json(err.message);
    }
};

const deleteTrainee = (req, res) => {
    // res.send("Delete Trainee - from Routes");

    try {
        TraineeModel.deleteOne({"_id": req.body._id})
            .then(results => {
                if(results.deletedCount > 0) {
                    res.json("Trainee Deleted Successfully!");
                } else {
                    res.json("Unable to delete the Trainee!");
                }
            });
    } catch (err) {
        res.json(err.message);
    }
};

module.exports = {
    showAllTrainees,
    showTrainee,
    addTrainee,
    updateTrainee,
    deleteTrainee
}