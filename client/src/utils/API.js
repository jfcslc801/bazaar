import axios from "axios";

export default {
  // Gets all items
  getItems: function() {
		console.log("Inside getItems");
    return axios.get("/api/items");
  },
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Gets the item by userNamey
  getItemByUser: function (userListings) {
    return axios.get("/userListings/"+ userListings)
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves a item to the database
  saveItem: function(itemData) {
    return axios.post("/api/items", itemData);
  }
};
