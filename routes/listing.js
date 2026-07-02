const express = require("express");
const router = express.Router();

const ListingController = require("../controller/listing");
const wrapAsync = require("../utils/wrapAsync.js");

const multer = require("multer");

const { storage } = require("../cloudconfig.js");
const upload = multer({ storage });

const {
  validateListing,
  validateObjectId,
  isLoggedIn,
  isOwner,
} = require("../middleware.js");

router.get("/", wrapAsync(ListingController.index));
router.get("/new", isLoggedIn, ListingController.new);
router.post(
  "/",
  isLoggedIn,
  upload.single("listing[image]"),
  (req, res, next) => {
    console.log("POST /listings reached");
    console.log(req.file);
    next();
  },
  validateListing,
  wrapAsync(ListingController.create)
);
router.get(
  "/:id/edit",
  validateObjectId,
  isLoggedIn,
  isOwner,
  wrapAsync(ListingController.edit)
);
router.patch(
  "/:id",
  validateObjectId,
  isLoggedIn,
  isOwner,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(ListingController.update)
);
router.delete(
  "/:id",
  validateObjectId,
  isLoggedIn,
  isOwner,
  wrapAsync(ListingController.delete)
);

router.get("/:id", validateObjectId, wrapAsync(ListingController.show));

module.exports = router;
