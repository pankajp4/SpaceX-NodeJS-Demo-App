// import all library/packages required for this module/file
const { chai, server, expect } = require("./testConfig");

/**
 * Test cases to test all the spaceX APIs
 * Covered API test cases:
 * (1) /GET SpaceX launches API - Authorization
 * (2) /GET SpaceX launches API - Validations
 * (3) /GET SpaceX launches API - Success
 * (4) /GET SpaceX launches API - limit filter Success
 * (5) /GET SpaceX launches API - launch_year filter Success
 * (6) /GET SpaceX launches API - launch_success filter Success
 * (7) /GET SpaceX launches API - land_success filter Success
 * (8) /GET SpaceX launches API - all filter Success
 */

describe("SpaceX-NodeJS-Demo-App Automation Test Result:", () => {
	// prepare JWT data for testing
	const jwtTestAuthorizationData = {
		token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGb3ItQXV0b21hdGVkLVRlc3QiLCJuYW1lIjoiUGFua2FqIFBhbmRleSIsImlhdCI6MTUxNjIzOTAyMn0.UM1pDrlm4LfYaEA5VeJodsM6Vb6Wkt-bafTHHHNXRrw"
	};

	// prepare failure data for testing
	const failureTestData = {
		limit: 1234 // other validation failure cases "15a", true, false, null
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

		it("It should return validation errors for SpaceX launches GET call.", (done) => {
			chai.request(server)
				.get("/v3/launches/?" + new URLSearchParams(failureTestData).toString())
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(400);
					res.body.should.have.property("status").eql(false);
					res.body.should.have.property("message").eql("Validation FAILED. Please check and fix payload data.");
					done();
				});
		});


		// prepare success data for limit testing
		const limitSuccessTestData = {
			limit: 15
		};

		it("It should generate SpaceX launches successfully for GET call.", (done) => {
			chai.request(server)
				.get("/v3/launches/?" + new URLSearchParams(limitSuccessTestData).toString())
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("status").eql(true);
					res.body.should.have.property("message").eql("Satellite launch data fetched successfully.");
					done();
				});
		});

		it("It should match limit param with data count for SpaceX launches GET call.", (done) => {
			chai.request(server)
				.get("/v3/launches/?" + new URLSearchParams(limitSuccessTestData).toString())
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("status").eql(true);
					res.body.should.have.property("message").eql("Satellite launch data fetched successfully.");
					expect(res.body.data.length).to.equal(limitSuccessTestData.limit);
					done();
				});
		});

		// prepare success data for launch_year filter testing
		const yearSuccessTestData = {
			limit: 45,
			launch_year: 2008
		};

		it("It should match launch_year param with responses for SpaceX launches GET call.", (done) => {
			chai.request(server)
				.get("/v3/launches/?" + new URLSearchParams(yearSuccessTestData).toString())
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("status").eql(true);
					expect(res.body.data[1].launch_year).to.equal(yearSuccessTestData.launch_year);
					expect(res.body.data[3].launch_year).to.equal(yearSuccessTestData.launch_year);
					expect(res.body.data[5].launch_year).to.equal(yearSuccessTestData.launch_year);
					expect(res.body.data[8].launch_year).to.equal(yearSuccessTestData.launch_year);
					done();
				});
		});

		// prepare success data for launch_success filter testing
		const launchSuccessTestData = {
			limit: 25,
			launch_success: true
		};

		it("It should match launch_success param with responses for SpaceX launches GET call.", (done) => {
			chai.request(server)
				.get("/v3/launches/?" + new URLSearchParams(launchSuccessTestData).toString())
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("status").eql(true);
					expect(res.body.data[1].launch_success).to.equal(launchSuccessTestData.launch_success);
					expect(res.body.data[4].launch_success).to.equal(launchSuccessTestData.launch_success);
					expect(res.body.data[8].launch_success).to.equal(launchSuccessTestData.launch_success);
					expect(res.body.data[12].launch_success).to.equal(launchSuccessTestData.launch_success);
					done();
				});
		});

		// prepare success data for land_success filter testing
		const landSuccessTestData = {
			limit: 35,
			land_success: false
		};

		it("It should match land_success param with responses for SpaceX launches GET call.", (done) => {
			chai.request(server)
				.get("/v3/launches/?" + new URLSearchParams(landSuccessTestData).toString())
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("status").eql(true);
					expect(res.body.data[1].launch_landing).to.equal(landSuccessTestData.land_success);
					expect(res.body.data[4].launch_landing).to.equal(landSuccessTestData.land_success);
					expect(res.body.data[8].launch_landing).to.equal(landSuccessTestData.land_success);
					expect(res.body.data[12].launch_landing).to.equal(landSuccessTestData.land_success);
					done();
				});
		});

		// prepare success data for all filters testing
		const allFilterSuccessTestData = {
			limit: 4,
			launch_year: 2012,
			launch_success: true,
			land_success: false
		};

		it("It should match all param with responses for SpaceX launches GET call.", (done) => {
			chai.request(server)
				.get("/v3/launches/?" + new URLSearchParams(allFilterSuccessTestData).toString())
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("status").eql(true);
					expect(res.body.data.length).to.equal(allFilterSuccessTestData.limit);
					expect(res.body.data[1].launch_year).to.equal(allFilterSuccessTestData.launch_year);
					expect(res.body.data[2].launch_success).to.equal(allFilterSuccessTestData.launch_success);
					expect(res.body.data[3].launch_landing).to.equal(allFilterSuccessTestData.land_success);
					done();
				});
		});
	});
});