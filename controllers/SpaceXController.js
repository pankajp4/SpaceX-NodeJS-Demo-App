// import all library/packages required for this module/file
const { query, validationResult } = require("express-validator");
const apiResponseHandler = require("../helpers/apiResponseHelper");
const satLaunchHelper = require("../helpers/satLaunchHelper");
const auth = require("../middlewares/jwt");
const launchDummyData = require("../models/launchDummyData.json");

/**
 * SpaceX GET Launches API function.
 * It checks validation on query params also sanatise the inputs as well
 * 
 * @param {Number} limit number of records you want to get in response
 * @param {Boolean} launch_success (optional) do you want to apply launch filter
 * @param {Boolean} land_success (optional) do you want to apply landing filter
 * @param {Number} launch_year (optional) filter for which launch year you want to fetch data
 * 
 * @returns {Response} send http response with status, msg and optional data
 */
exports.spaceXGetLaunches = [
	auth,
	query("limit", "limit should not be empty.").not().isEmpty(),
	query("limit", "limit should be an integer and in the range of 0 to 100.").isInt({ gt: 0, lt: 101 }),
	query("limit", "limit must be an integer.").isNumeric(),
	query("limit", "limit must have length of 1 to 3 digit.").isLength({ min: 1, max: 3 }).trim(),
	query("launch_success", "launch_success must be an boolean.").optional().isBoolean().toBoolean(),
	query("land_success", "land_success must be an boolean.").optional().isBoolean().toBoolean(),
	query("launch_year", "launch_year should be an integer and in the range of 2006 to 2020.").optional().isInt({ gt: 2005, lt: 2021 }),
	query("launch_year", "launch_year must be an integer.").optional().isNumeric(),
	query("launch_year", "launch_year must have length of 4 digit.").optional().isLength({ min: 4, max: 4 }).trim().toInt(),
	(req, res) => {
		try {
			// get all validation errors as array
			const vResultObj = validationResult(req);

			// check if validation result obj have any errors or not
			if (!vResultObj.isEmpty()) {
				return apiResponseHandler.validationErrorWithData(res, "Validation FAILED. Please check and fix payload data.", vResultObj.array());
			} else {
				// everything is checked - code here
				// get query string params from URL route send by client
				const urlFilterParams = req.query;

				// call getLaunchData from helper and save output
				const responseToSend = satLaunchHelper.getLaunchData(launchDummyData, urlFilterParams);

				// everything is good send response withsuccess
				return apiResponseHandler.successWithData(res, "Satellite launch data fetched successfully.", responseToSend);
			}
		} catch (err) {
			// send error in json response with status 500. 
			return apiResponseHandler.error(res, err);
		}
	}
];
