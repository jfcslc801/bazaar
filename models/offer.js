const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema({
  userID: { type: String, required: true },
  email: {type: String, required: true},
  location: {type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
