const { listingSchema, reviewSchema } = require("./schema");
const ExpressError = require("./utils/expressError");
const Listing = require("./models/listing");
const Review = require("./models/review");

module.exports.validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);

  if (error) {
    const errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  }

  next();
};

module.exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);

  if (error) {
    const errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  }

  next();
};

module.exports.validateObjectId = (req, res, next) => {
  const mongoose = require("mongoose");

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw new ExpressError(400, "Invalid Listing ID");
  }

  next();
};

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;

    req.flash("error", "You must be logged in first.");
    return res.redirect("/login");
  }

  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    throw new ExpressError(404, "Listing not found");
  }
  if (!listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the owner of this listing.");
    return res.redirect(`/listings/${id}`);
  }

  next();
};

module.exports.isAuthor = async (req, res, next) => {
  const { id, reviewId } = req.params;
  const review = await Review.findById(reviewId);

  if (!review) {
    throw new ExpressError(404, "Review not found");
  }

  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not allowed.");
    return res.redirect(`/listings/${id}`);
  }

  next();
};

module.exports.storeReturnTo = (req, res, next) => {
  const referer = req.get("Referer");

  if (referer && !referer.includes("/login") && !referer.includes("/signup")) {
    req.session.redirectUrl = referer;
  }

  next();
};
