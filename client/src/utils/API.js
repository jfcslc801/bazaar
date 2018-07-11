import axios from "axios";

export default {
  // Gets all items
  getItems: function () {
    console.log("Inside getItems");
    return axios.get("/api/items");
  },
  // Gets the item with the given id
  getItem: function (id) {
    return axios.get("/api/items/" + id);
  },
  // Gets the item with the given userId
  getUserItems: function (user) {
    return axios.get("/api/items/userListings/" + user);

  },
  // Deletes the item with the given id
  deleteItem: function (id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves a item to the database
  saveItem: function (itemData) {
    return axios.post("/api/items", itemData);
	},
	saveImage: function(imageData) {
    return axios.post("/api/images", imageData);
	}
};
