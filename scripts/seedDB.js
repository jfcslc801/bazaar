const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Items collection and inserts the items below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactitemlist",
  {
    useMongoClient: true
  }
);

const itemSeed = [
  {
        "itemName": "beth",
        "userID":"iz2@gmail.com",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    "listed_price": "15.00",
    "location": "Sandy, UT"
  },
  {
    "itemName": "birdperson",
        "userID":"iz3@gmail.com",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    "listed_price": "278.00",
    "location": "Salt Lake City, UT"
  },
  {
    "itemName": "evilmorty",
        "userID":"iz5@gmail.com",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    "listed_price": "4.00",
    "location": "New York, NY"
  },
  {
    "itemName": "gainthead",
        "userID":"iz2@gmail.com",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    "listed_price": "69.00",
    "location": "Jersey City, NJ"
  },
  {
    "itemName": "goldenford",
        "userID":"iz3@gmail.com",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    "listed_price": "104.00",
    "location": "Salt Lake City, UT"
  },
  {
    "itemName": "jerry",
        "userID":"iz5@gmail.com",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    "listed_price": "25.00",
    "location": "Providence, RI"
  },
  {
    "itemName": "jessica",
        "userID":"iz2@gmail.com",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    "listed_price": "99.99",
    "location": "Charlotte, NC"
  },
  {
    "itemName": "meeseeks",
        "userID":"iz2@gmail.com",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    "listed_price": "75.00",
    "location": "Indianapolis, IN"
  },
  {
    "itemName": "morty",
        "userID":"iz2@gmail.com",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    "listed_price": "52.60",
    "location": "Cheyenne, WY"
  },
  {
    "itemName": "mr",
        "userID":"iz2@gmail.com",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    "listed_price": "48.62",
    "location": "San Francisco, CA"
  },
  {
    "itemName": "rick",
        "userID":"iz3@gmail.com",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    "listed_price": "26.05",
    "location": "Chicago, IL"
  },
  {
    "itemName": "summer",
        "userID":"iz5@gmail.com",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    "listed_price": "108.08",
    "location": "Las Vegas, NV"
  }
]

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
