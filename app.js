const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ejs = require("ejs");
const methodOverride = require("method-override");

const Listing = require("./models/lisitng.js");

const app = express();
const port = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/social";

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("ejs", path.join(__dirname, "views"));

connectDB()
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

async function connectDB() {
  await mongoose.connect(MONGO_URL);
}
app.get("/", (req, res) => {
  res.send("Hello World");
});

//index route
app.get("/listings", async (req, res) => {
  let listings = await Listing.find();
  res.render("listing/index.ejs", { listings });
});

//new route
app.get("/listings/new", (req, res) => {
  res.render("listing/new.ejs");
});

app.post("/listings", async (req, res) => {
  let listing = req.body.listing;
  const new_listing = new Listing(listing);
  await new_listing.save();
  res.redirect("/listings");
});

//patch route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("listing/edit.ejs", { listing });
});

app.patch("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

//delete route
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});

//show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);

  res.render("listing/show.ejs", { listing });
});

app.listen(port, (req, res) => {
  console.log("server");
});
