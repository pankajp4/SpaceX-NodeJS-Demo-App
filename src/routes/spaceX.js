// import all library/packages required for this module/file
const express = require("express");
const SpaceXController = require("../controllers/SpaceXController");

// get express router object
const router = express.Router();

// specify spaceX API supported method-routes here
router.get("/", SpaceXController.spaceXGetLaunches);

module.exports = router;