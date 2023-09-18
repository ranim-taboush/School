require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const dbConn = require("./../config/dbConn");
const levelRoute = require('./../Routes/levelRoute')
const gradeRoute = require('./../Routes/gradeRoute')
const semesterRoute = require('./../Routes/semesterRoute')
const subjectRoute = require('./../Routes/subjectRoute')
const chapterRoute = require('./../Routes/chapterRoute')

mongoose.set('strictQuery', true);
const PORT = process.env.PORT || 5000;
dbConn();
app.use(express.json())

// app.use("/", express.static(path.join(__dirname, "../public")));
app.use("/", levelRoute)
app.use("/", gradeRoute)
app.use("/", semesterRoute)
app.use("/", subjectRoute)
app.use("/", chapterRoute)

// app.all("*", (req, res) => {
//   res.status(404);
//   if (req.accepts("html")) {
//     res.sendFile(path.join(__dirname, "views", "404.html"));
//   } else if (req.accepts("json")) {
//     res.send({ message: "404 page not found" });
//   } else {
//     res.type("text").send("404 page not found");
//   }
// });

mongoose.connection.once("open", () => {
  console.log("Connected to DB");
  app.listen(PORT, () => console.log(`Running on port ${PORT}`));
});