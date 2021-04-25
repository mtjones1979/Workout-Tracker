const router = require("express").Router();
const db= require("../models");

// tutor helped me with both Get routes, not sure how aggregate works, may update to what I know...
router.get("/api/workouts", (req, res) => {
    // Workout.aggregate([
    //     {
    //       $addFields: {
    //           totalDuration: {
    //               $sum: "$exercises.duration",
    //           }
    //       }  
    //     }
    // ])
    db.Workout.find({})

        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
    });
router.get("/api/workouts/range", (req, res) => {
    // Workout.aggregate([
    //     {
    //       $addFields: {
    //           totalDuration: {
    //               $sum: "$exercises.duration",
    //           }
    //       }  
    //     }
    // ])
    db.Workout.find({})
        .limit(8)
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.json(err)
        })
});
// .sort({ _id: -1 })
// .limit(8)
// .then((dbWorkouts) => {
//     res.json(dbWorkouts);
// })
// .catch((err) => {
//     res.json(err);
// });

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json("error occured creating a workout: ", err);
        });
});
// wouldn't let me continue with post until put was filled in
router.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;

    db.Workout.findOneAndUpdate({ _id: id }, { $push: {exercises: body} })
    .then ((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch ((err) => {
        res.json(err);
    })
});
module.exports = router;