// import all library/packages required for this module/file
const express = require("express");
const queryString = require("querystring");
const APICallHelper = require("../helpers/APICallHelper");
require("dotenv").config();

// get express router object
const router = express.Router();

// landing page UI route
router.get("/", (req, res) => {
	// data bucket for view
	let dataBucket = {
		title: "SpaceX-NodeJS-Demo-App",
		satLaunchData: [],
		appliedFilters: { ...req.query },
		errors: {},
	};

	// call helper function to get promise
	APICallHelper.makeAPICall("GET", `${req.protocol}://${req.headers.host}/v3/launches?limit=100&${queryString.stringify(dataBucket.appliedFilters || "")}`)
		.then(response => {
			// success from API - specify ejs file and send all data to the view
			res.render("launchProgram", { ...dataBucket, satLaunchData: response.data && response.data.data });
		})
		.catch(error => {
			// failure from API - specify ejs file and send all data to the view
			res.render("launchProgram", { ...dataBucket, errors: error.data ? error.data : { message: error.statusText } });
		});
});

module.exports = router;
