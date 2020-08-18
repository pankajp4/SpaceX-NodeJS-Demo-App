/**
 * Returns array of satellite launches based on send filters
 * 
 * @param {Array<Object>} launchDummyData this is a dummy set of data - later can be replaced by
 * live data source
 * @param {Object} urlFilterParams filter object applied by the caller
 * 
 * @returns {Array<Number|String>} array of object containg launch details
 */
exports.getLaunchData = (launchDummyData, filters) => {
	// basic validation on function param
	if (typeof launchDummyData !== "object" && launchDummyData.length > 0 && typeof filters !== "object") return [];

	// apply filters on dummy data to fetch all matching launch data
	let responseToSend = launchDummyData.filter((lData) => ((filters.launch_success ? (filters.launch_success === lData.launch_success) : true)
		&& (filters.land_success ? (filters.land_success === lData.launch_landing) : true)
		&& (filters.launch_year ? (filters.launch_year === lData.launch_year) : true)));

	// apply limit filter on top of filtered data
	responseToSend = responseToSend.filter((lData, index) => (index < filters.limit));

	// response to caller
	return responseToSend;
};