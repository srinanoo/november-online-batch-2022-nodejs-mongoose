const router = require('express').Router();

// Get the Controller instance
const TraineesController = require('../controllers/traineeControllers');

// Routes (RESTful routes)
router.get("/showAllTrainees", TraineesController.showAllTrainees);

router.get("/showTrainee", TraineesController.showTrainee);

router.post("/addTrainee", TraineesController.addTrainee);

router.put("/updateTrainee", TraineesController.updateTrainee);

router.delete("/deleteTrainee", TraineesController.deleteTrainee);

module.exports = router;