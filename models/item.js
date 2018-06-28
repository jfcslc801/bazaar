const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemName: { type: String, required: true },
  userID: { type: String, required: true },
  listed_price: {type: Number, required: true},
  description: String,
  location: {type: String, required: true},
  date: { type: Date, default: Date.now },
  image_url: {type: URL, required: true}
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
