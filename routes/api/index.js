const router = require("express").Router();
const itemRoutes = require("./items"); 
const userRoutes = require("./users"); 
const offerRoutes = require("./offers"); 

// Item routes
router.use("/items", itemRoutes); 
router.use("/users", userRoutes); 
router.use("/offer", offerRoutes); 

module.exports = router;
