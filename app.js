const express = require("express");
const mongoose = require("mongoose");

const Listing = require("./model/lisitng.js");

const app = express();
const port = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/social";

connectDB()
  .then(() => "connected to DB")
  .catch((err) => console.log(err));

async function connectDB() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, (req, res) => {
  console.log("server");
});
