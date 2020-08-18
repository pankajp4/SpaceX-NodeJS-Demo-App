// import all library/packages required for this module/file
const express = require("express");
const queryString = require("querystring");
const APICallHelper = require("../helpers/APICallHelper");

// get express router object
const router = express.Router();

// server side rendering route for filtered and listing content
router.get("/getFilteredListing", (req, res) => {
	// data bucket for view
	let dataBucket = {
		title: "SpaceX-NodeJS-Demo-App",
		satLaunchData: [],
		appliedFilters: { ...req.query },
		errors: {},
	};

	// call helper function to get promise
	APICallHelper.makeAPICall("GET", `http://localhost:${process.env.PORT || "4000"}/v3/launches?limit=100&${queryString.stringify(dataBucket.appliedFilters || "")}`)
		.then(response => {
			// success from API - specify ejs file and send all data to the view
			res.render("filterWithSatListing", { ...dataBucket, satLaunchData: response.data && response.data.data }, (err, html) => {
				res.send(html);
			});
		})
		.catch(error => {
			// failure from API - specify ejs file and send all data to the view
			res.render("filterWithSatListing", { ...dataBucket, errors: error.data ? error.data : { message: error.statusText } }, (err, html) => {
				res.send(html);
			});
		});
});

module.exports = router;
