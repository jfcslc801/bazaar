const router = require("express").Router();
const itemRoutes = require("./items"); 
const imageRoutes = require("./images");

// Item routes
router.use("/items", itemRoutes); 

// Image routes
router.use("/images",imageRoutes);

module.exports = router;
