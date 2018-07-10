const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

// Matches with "/api/items"
router.route("/")
  .get(itemsController.findAll)
  .post(itemsController.create);

// Matches with "/api/items/:id"
router.route("/:id")
  .get(itemsController.findById)
  .put(itemsController.update)
  .delete(itemsController.remove);

  // Matches with "/api/items/userListings/:userID"

router.route("/userListings/:userID")
  .get(itemsController.userListings)
  .delete(itemsController.deleteUserListings);

  // Matches with "api/items/userListings/titleName"

router.route("/title/:titleName")
  .get(itemsController.findByTitle)
  .delete(itemsController.deleteTitleListings);

  router.route("/create/:listedItem")
  .post(itemsController.create)
  .delete(itemsController.deleteTitleListings);

module.exports = router;
