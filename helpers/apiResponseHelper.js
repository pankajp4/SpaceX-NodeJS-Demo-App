/**
 * Used to return HTTP response for success
 * 
 * @param {Object} res http response object
 * @param {String} msg message to be send to the API caller
 * 
 * @returns {Response} http response with status, msg and optional data
 */
exports.success = (res, msg) => {
	const data = {
		status: true,
		message: msg
	};
	return res.status(200).json(data);
};

/**
 * Used to return HTTP response for success with data
 * 
 * @param {Object} res http response object
 * @param {String} msg message to be send to the API caller
 * @param {Any} data array which contains data to be send
 * 
 * @returns {Response} http response with status, msg and optional data
 */
exports.successWithData = (res, msg, data) => {
	const resData = {
		status: true,
		message: msg,
		data: data
	};
	return res.status(200).json(resData);
};

/**
 * Used to return HTTP response for error
 * 
 * @param {Object} res http response object
 * @param {String} msg message to be send to the API caller
 * 
 * @returns {Response} http response with status, msg and optional data
 */
exports.error = (res, msg) => {
	const data = {
		status: false,
		message: msg,
	};
	return res.status(500).json(data);
};

/**
 * Used to return HTTP response for resource not found
 * 
 * @param {Object} res http response object
 * @param {String} msg message to be send to the API caller
 * 
 * @returns {Response} http response with status, msg and optional data
 */
exports.notFound = (res, msg) => {
	const data = {
		status: false,
		message: msg,
	};
	return res.status(404).json(data);
};

/**
 * Used to return HTTP response for validation error
 * 
 * @param {Object} res http response object
 * @param {String} msg message to be send to the API caller
 * @param {Any} data array which contains data to be send
 * 
 * @returns {Response} http response with status, msg and optional data
 */
exports.validationErrorWithData = (res, msg, data) => {
	const resData = {
		status: false,
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};

/**
 * Used to return HTTP response for JWT unauthorized
 * 
 * @param {Object} res http response object
 * @param {String} msg message to be send to the API caller
 * 
 * @returns {Response} http response with status, msg and optional data
 */
exports.unauthorized = (res, msg) => {
	const data = {
		status: false,
		message: msg,
	};
	return res.status(401).json(data);
};