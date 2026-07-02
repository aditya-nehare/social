const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
  const listings = await Listing.find();
  res.render("listing/index", { listings });
};

module.exports.new = (req, res) => {
  res.render("listing/new");
};

module.exports.create = async (req, res) => {
  console.log("Controller reached");
  console.log(req.file);

  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New Listing Added!");
  res.redirect(`/listings/${newListing._id}`);
};

module.exports.edit = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) throw new ExpressError(404, "Listing not found");
  res.render("listing/edit", { listing });
};

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findByIdAndUpdate(id, req.body.listing, {
    new: true,
    runValidators: true,
  });

  if (!listing) throw new ExpressError(404, "Listing not found");

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findByIdAndDelete(id);

  if (!listing) throw new ExpressError(404, "Listing not found");
  req.flash("error", "Listing Removed");
  res.redirect("/listings");
};

module.exports.show = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate({
      path: "owner",
    });

  if (!listing) throw new ExpressError(404, "Listing not found");

  res.render("listing/show", { listing });
};
