const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  userID: { type: String, required: true },
  email: {type: String, required: true},
  location: {type: String, required: true},
  date: { type: Date, default: Date.now },
  itemID: {type: String, required: true},
  favoriteItem: {type: String, required: false}
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;