const express = require("express");
const mongoose = require("mongoose");
// morgan was part of starter package.json, not sure how to implement
// const morgan = require("morgan");

const PORT = process.env.PORT || 3000
// const uri = process.env.MONGODB_URI;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// app.use(morgan("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
console.log(mongoose.connect)
// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/viewRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});