const router = require("express").Router();
const itemRoutes = require("./items"); 
const userRoutes = require("./users"); 
const offerRoutes = require("./offers"); 
const favoriteRoutes = require("./favorites");

// Item routes
router.use("/items", itemRoutes); 
router.use("/users", userRoutes); 
router.use("/offers", offerRoutes); 
router.use("/favorites", favoriteRoutes);

module.exports = router;
