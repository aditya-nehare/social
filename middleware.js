const { listingSchema, reviewSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError");

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
