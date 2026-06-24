const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const engine = require("ejs-mate");

const Listing = require("./models/listing.js");

const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/expressError.js");

const { listingSchema } = require("./validators/listing.schema.js");

const app = express();
const port = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/social";

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);

async function startServer() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected to DB");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("DB connection failed:", err);
  }
}

const validateObjectId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ExpressError(404, "Listing not found"));
  }
  next();
};

let validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

// index route
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const listings = await Listing.find();
    res.render("listing/index", { listings });
  })
);

// new route
app.get("/listings/new", (req, res) => {
  res.render("listing/new");
});

// create route
app.post(
  "/listings",
  validateListing,
  wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  })
);

// edit route
app.get(
  "/listings/:id/edit",
  validateObjectId,
  wrapAsync(async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }

    res.render("listing/edit", { listing });
  })
);

// update route
app.patch(
  "/listings/:id",
  validateObjectId,
  validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, req.body.listing, {
      new: true,
      runValidators: true,
    });

    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }

    res.redirect(`/listings/${id}`);
  })
);

// delete route
app.delete(
  "/listings/:id",
  validateObjectId,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndDelete(id);

    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }

    res.redirect("/listings");
  })
);

// extras
app.get("/terms", (req, res) => {
  res.render("extras/terms");
});

app.get("/privacy", (req, res) => {
  res.render("extras/privacy");
});

app.get("/support", (req, res) => {
  res.render("extras/support");
});

// show route
app.get(
  "/listings/:id",
  validateObjectId,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }

    res.render("listing/show", { listing });
  })
);

// error handler
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;

  if (err.name === "CastError") {
    statusCode = 404;
    message = "Listing not found";
  }

  if (err.name === "ValidationError") {
    statusCode = 400;
  }

  res.status(statusCode).render("alerts/error", { statusCode, message });
});

startServer();
