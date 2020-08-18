// import all library/packages required for this module/file
const { chai, server, } = require("./testConfig");

/**
 * Test cases to test all the spaceX APIs
 * Covered API test cases:
 * (1) /GET SpaceX launches API - Authorization
 * (2) /GET SpaceX launches API - Success
 * (3) /GET SpaceX launches API - Validations
 */

describe("SpaceX-NodeJS-Demo-App Automation Test Result:", () => {
	// prepare JWT data for testing
	const jwtTestAuthorizationData = {
		token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGb3ItQXV0b21hdGVkLVRlc3QiLCJuYW1lIjoiUGFua2FqIFBhbmRleSIsImlhdCI6MTUxNjIzOTAyMn0.UM1pDrlm4LfYaEA5VeJodsM6Vb6Wkt-bafTHHHNXRrw"
	};

	// prepare success data for testing
	const successTestData = {
		total: 15
	};

	// prepare failure data for testing
	const failureTestData2 = {
		total: 1234 // other validation failure cases "15a", true, false, null
	};

	// describe test cases for SpaceX /GET API
	describe("SpaceX /GET API Tests:", () => {
		it("It should send Authorization error for spaceX-launches GET call", (done) => {
			chai.request(server)
				.get("/v3/launches")
				.send()
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(400);
					done();
				});
		});

		it("It should generate SpaceX launches successfully for GET call.", (done) => {
			chai.request(server)
				.get("/v3/launches/" + successTestData.total)
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("status").eql(true);
					res.body.should.have.property("message").eql("Satellite launch data fetched successfully.");
					done();
				});
		});

		it("It should return validation errors for SpaceX launches GET call.", (done) => {
			chai.request(server)
				.get("/v3/launches/" + failureTestData2.total)
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(400);
					res.body.should.have.property("status").eql(false);
					res.body.should.have.property("message").eql("Validation FAILED. Please check and fix payload data.");
					done();
				});
		});
	});
});