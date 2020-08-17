// env variable for automated test, it to "test"
process.env.NODE_ENV = "test";

// import all library/packages required for this module/file (all are dev-dependencies) 
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

// export config to use in multiple files
module.exports = {
	chai: chai,
	server: server,
	should: should,
	expect: expect
};