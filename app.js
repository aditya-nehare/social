require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const engine = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const MongoStore = require("connect-mongo").default;

const ExpressError = require("./utils/expressError.js");

const passport = require("passport");
require("./config/passport");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const app = express();
const port = 8080;
const MONGO_URL = process.env.MONGO_URL;

const Store = MongoStore.create({
  mongoUrl: process.env.MONGO_URL,
  crypto: {
    secret: process.env.SESSION_SRT,
  },
  touchAfter: 24 * 3600,
});

Store.on("error", (err) => {
  console.log("MongoStore Error:", err);
});

const sessionOpt = {
  store: Store,
  secret: process.env.SESSION_SRT,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  },
};

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sessionOpt));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.get("/", (req, res) => {
  res.render("home");
});

// Routes
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

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

app.all("/{*splat}", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// Error Handler
app.use((err, req, res, next) => {
  console.log("Error handler reached");
  let { statusCode = 500, message = "Something went wrong" } = err;
  if (err.name === "CastError") {
    statusCode = 404;
    message = "Listing not found";
  }
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = err.message;
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
