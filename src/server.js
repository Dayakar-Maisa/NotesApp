//initialization
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Note = require("./models/Note");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongodbPath =
  "mongodb+srv://root:jbf123@bookstore.zvl4frd.mongodb.net/notesdb";
mongoose.connect(mongodbPath).then(function () {
  //homepage Routes
  app.get("/", (req, res) => {
    const response = { message: "API Work" };
    res.json(response);
  });
  const noteRouter = require("./routes/Notes");
  app.use("/notes", () => noteRouter);
});
//runiing the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started... at ${PORT}`);
});
