const express = require("express");
const router = express.Router({ mergeParams: true });

const Review = require("../models/review");
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, validateReview, isAuthor } = require("../middleware");

const ReviewController = require("../controller/review");

router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(ReviewController.addReview)
);
router.delete(
  "/:reviewId",
  isLoggedIn,
  isAuthor,
  wrapAsync(ReviewController.deleteReview)
);

module.exports = router;
