const express = require("express");
const router = express.Router();

const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const { validateListing, validateObjectId } = require("../middleware.js");

router.get(
  "/",
  wrapAsync(async (req, res) => {
    const listings = await Listing.find();
    res.render("listing/index", { listings });
  })
);

router.get("/new", (req, res) => {
  res.render("listing/new");
});

// create route
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing Added!");
    res.redirect(`/listings/${newListing._id}`);
  })
);

// edit route
router.get(
  "/:id/edit",
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
router.patch(
  "/:id",
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
    req.flash("success", "Listing Updated")
    res.redirect(`/listings/${id}`);
  })
);

// delete route
router.delete(
  "/:id",
  validateObjectId,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndDelete(id);

    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }
    req.flash("error", "Listing Removed")
    res.redirect("/listings");
  })
);

router.get(
  "/:id",
  validateObjectId,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");

    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }

    res.render("listing/show", { listing });
  })
);

module.exports = router;
