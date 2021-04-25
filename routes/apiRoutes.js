const router = require("express").Router();
const Workout = require("../models/workout");

// tutor helped me with both get routes and setting up folders
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
          $addFields: {
              totalDuration: {
                  $sum: "$exercises.duration",
              }
          }  
        }
    ])
})
.then((dbWorkouts) => {
    res.json(dbWorkouts);
})
.catch((err) => {
    res.json(err);
});

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
          $addFields: {
              totalDuration: {
                  $sum: "$exercises.duration",
              }
          }  
        }
    ])
})
.sort({ _id: -1 })
.limit(8)
.then((dbWorkouts) => {
    res.json(dbWorkouts);
})
.catch((err) => {
    res.json(err);
});