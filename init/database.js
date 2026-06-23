const mongoose = require("mongoose");

const data = require("./raw_data.js");
const Listing = require("../model/lisitng.js");

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

let init = () => {
  Listing.deleteMany({})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  Listing.insertMany(data.data)
    .then(() => {
      console.log("data inserted");
    })
    .catch((err) => {
      console.log(err);
    });
};

init();
