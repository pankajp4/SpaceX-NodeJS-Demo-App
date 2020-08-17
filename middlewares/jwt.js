// import all library/packages required for this module/file
const jwt = require("express-jwt");

// get JWT SECRET from environment file
const secret = process.env.JWT_SECRET;

// get JWT request handler
const authenticate = jwt({
	secret: secret,
	algorithms: ["HS256"]
});

module.exports = authenticate;