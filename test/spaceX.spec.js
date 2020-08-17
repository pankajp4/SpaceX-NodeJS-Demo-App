// import all library/packages required for this module/file
const { chai, server, expect } = require("./testConfig");
const satLaunchHelper = require("../helpers/satLaunchHelper");

/**
 * Test cases to test all the spaceX APIs
 * Covered API test cases:
 * (1) /GET SpaceX - Authorization
 * (2) /GET SpaceX - Success
 * (3) /GET SpaceX - Validations
 * (4) /GET SpaceX - Authorization
 * (5) /GET SpaceX - Success
 * (6) /GET SpaceX - Validations
 * 
 * Covered getLaunchData test cases:
 * (1) not a multiple of 3 & 5
 * (2) multiple of 3
 * (3) multiple of 5
 * (4) multiple of both 3 & 5
 * (5) non-numerical input
 * (6) zero total
 */

describe("SpaceX-NodeJS-Demo-App Automation Test Result:", () => {
	/**
	 * ************************ API Test Cases - Starts Here ************************
	 */
	// prepare JWT data for testing
	const jwtTestAuthorizationData = {
		token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGb3ItQXV0b21hdGVkLVRlc3QiLCJuYW1lIjoiUGFua2FqIFBhbmRleSIsImlhdCI6MTUxNjIzOTAyMn0.UM1pDrlm4LfYaEA5VeJodsM6Vb6Wkt-bafTHHHNXRrw"
	};

	// prepare success data for testing
	const successTestData = {
		total: 15
	};

	// prepare failure data for testing
	const failureTestData = {
		total: "15a" // other validation failure cases 1234, true, false, null
	};

	// prepare failure data for testing
	const failureTestData2 = {
		total: 1234 // other validation failure cases "15a", true, false, null
	};

	// describe test cases for SpaceX /GET API
	describe("SpaceX /GET API Tests:", () => {
		it("It should send Authorization error for spaceX GET call", (done) => {
			chai.request(server)
				.get("/v3/launches")
				.send()
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(400);
					done();
				});
		});

		it("It should generate SpaceX successfully for GET call.", (done) => {
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

		it("It should return validation errors for GET call.", (done) => {
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

	/**
	 * ************************ API Test Cases - Ends Here ************************
	 */

	/**
	 * ======================= getLaunchData Test Cases - Starts Here =========
	 */

	// describe test cases for getLaunchData helper function
	describe("getLaunchData Helper Function Tests:", () => {
		it("It should return the number itself when not a multiple of 3 & 5", () => {
			const count1 = 8;
			expect(satLaunchHelper.getLaunchData(count1)[count1 - 1]).to.equal(8);

			const count2 = 19;
			expect(satLaunchHelper.getLaunchData(count2)[count2 - 1]).to.equal(19);
		});

		it("It should return Fizz for multiples of 3", () => {
			const count1 = 12;
			expect(satLaunchHelper.getLaunchData(count1)[count1 - 1]).to.equal("Fizz");

			const count2 = 24;
			expect(satLaunchHelper.getLaunchData(count2)[count2 - 1]).to.equal("Fizz");
		});

		it("It should return Buzz for multiples of 5", () => {
			const count1 = 25;
			expect(satLaunchHelper.getLaunchData(count1)[count1 - 1]).to.equal("Buzz");

			const count2 = 40;
			expect(satLaunchHelper.getLaunchData(count2)[count2 - 1]).to.equal("Buzz");
		});

		it("It should return SpaceX for numbers which are multiple of both 3 & 5", () => {
			const count1 = 30;
			expect(satLaunchHelper.getLaunchData(count1)[count1 - 1]).to.equal("SpaceX");

			const count2 = 45;
			expect(satLaunchHelper.getLaunchData(count2)[count2 - 1]).to.equal("SpaceX");
		});

		it("It should refuse non-numerical input", () => {
			const count1 = undefined;
			expect(satLaunchHelper.getLaunchData(count1)).to.have.lengthOf(0);

			const count2 = null;
			expect(satLaunchHelper.getLaunchData(count2)).to.have.lengthOf(0);
		});

		it("It should refuse zero total", () => {
			const count1 = 0;
			expect(satLaunchHelper.getLaunchData(count1)).to.have.lengthOf(0);
		});
	});

	/**
	 * ======================= getLaunchData Test Cases - Ends Here =========
	 */
});