const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// tutor helped me with both get routes and setting up folders/schema
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type of exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of the exercise",
      },
      duration: {
        type: Number,
        required: "Enter the duration of the exercise in minutes",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;