const mongoose = require("mongoose");

const initdata = require("./raw_data.js");
const Listing = require("../models/listing.js");

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/social");
}

let init = async () => {
  await Listing.deleteMany({});
  initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner: "6a4208968983c04d91db4468",
  }));
  await Listing.insertMany(initdata.data);
};

init();
