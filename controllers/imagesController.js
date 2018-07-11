// const db = require("../models");
// import firebase from "firebase/app";
const firebase = require("firebase/app");
// import "firebase/auth";
// import $ from "jquery";
const $ = require("jquery");

// const storage = require('@google-cloud/storage')();

// const myBucket = storage.bucket('staging.bazaarimages.appspot.com');
const cloudinary = require("cloudinary");

// set your env variable CLOUDINARY_URL or set the following configuration
cloudinary.config({
	cloud_name: "baazaar",
	api_key: "878986889923554",
	api_secret: "uwlVa_dRTm4hNTsKbEB8aYjWXmE"
});

// Defining methods for the itemsController
module.exports = {
	findAll: function (req, res) {
		db.Item
			.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Item
			.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	create: function (req, res) {
		console.log(req.body);
		console.log(req.body.imagePath);

		cloudinary.v2.uploader.upload(req.body.imagePath,{tags:'basic_sample'},function(err,image){
			if (err){ 
				console.warn(err);
				res.send(err);
			}
			console.log("* "+image.url);
			res.send(image);
		});

	},
	update: function (req, res) {
		db.Item
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Item
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
