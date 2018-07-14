const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema({
  userID: { type: String, required: true },
  email: {type: String, required: true},
  offer: {type: String, required: true},
  date: { type: Date, default: Date.now },
  itemID: {type: String, required: true}
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
