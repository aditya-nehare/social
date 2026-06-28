const express = require("express");
const router = express.Router({ mergeParams: true });

const Review = require("../models/review");
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");

router.post("/", wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);

    const review = new Review(req.body.review);

    listing.reviews.push(review);

    await review.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
}));


module.exports = router;
