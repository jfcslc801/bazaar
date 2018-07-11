const router = require("express").Router();
const offersController = require("../../controllers/offersController");

// Matches with "/api/offers"
router.route("/")
  .get(offersController.findAll)
  .post(offersController.create);

// Matches with "/api/offers/:id"
router
  .route("/:itemID")
  .get(offersController.findByItemId)
  .put(offersController.update)
  .delete(offersController.remove);

module.exports = router;
