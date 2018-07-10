const db = require("../models");

// Defining methods for the itemsController
module.exports = {
  findAll: function (req, res) {
    console.log(req);
    db.Item
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  userListings: function (req, res) {
    console.log("get user listings foo", req)
    db.Item
      .find({userID: req.params.userID})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteUserListings: function (req, res) {
    db.Item
    .findById({ userID: req.params.userID })
    .then(dbModel => dbModel.remove())
    .then(dbModel => {res.json(dbModel)})
    .catch(err => res.status(422).json(err));
  },
  findByTitle: function(req, res) {
    db.Item
      .find({itemName: req.params.itemName})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
		console.log(req.body);
    db.Item
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Item
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Item
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

