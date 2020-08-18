// import all library/packages required for this module/file
const axios = require("axios");

/**
 * This method returns a promise which gets resolved or rejected
 * based on the result from the API
 * 
 * @param {String} type specify type of http call you want to make
 * @param {String} apiURL specify API endpoint or url
 * 
 * @returns {Promise} a promise for caller
 */
exports.makeAPICall = (type, apiURL) => { // , optionalData = {} can be used to send optional data like headers etc
	return new Promise((resolve, reject) => {
		axios({
			method: type,
			url: apiURL,
			headers: {
				Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJHRVQtRXhwcmVzc0JhY2tlbmQiLCJuYW1lIjoiUGFua2FqIFBhbmRleSIsImlhdCI6MTUxNjIzOTAyMn0.t3P9f1ysZVJhnZYtxeXk0QzqHHgw3YLueoL7dXBSCmw",
			}
		})
			.then((response) => {
				// success
				resolve(response);
			})
			.catch((error) => {
				// failure
				reject(error.response);
			});
	});
};
