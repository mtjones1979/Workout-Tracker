const router = require("express").Router();
const path = require("path");

// tutor helped me with both Get routes and setting up all folders
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// Added after tutors helped set up
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

module.exports = router;