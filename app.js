const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const engine = require("ejs-mate");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");

const app = express();
const port = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/social";

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);

// Routes
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Extras
app.get("/terms", (req, res) => {
  res.render("extras/terms");
});

app.get("/privacy", (req, res) => {
  res.render("extras/privacy");
});

app.get("/support", (req, res) => {
  res.render("extras/support");
});

// Error Handler
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;

  if (err.name === "CastError") {
    statusCode = 404;
    message = "Listing not found";
  }

  if (err.name === "ValidationError") {
    statusCode = 400;
  }

  res.status(statusCode).render("alerts/error", {
    statusCode,
    message,
  });
});

// Database Connection
async function startServer() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

startServer();
