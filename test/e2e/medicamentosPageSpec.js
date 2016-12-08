var MedicamentosPage = require("./pages/medicamentosPage.js");

describe("Main Page", function() {
	var pageInfo = new MedicamentosPage();

	beforeEach(function() {
		pageInfo.visit();
	});

	it("Must be signed in", function() {
		pageInfo.getSignedUser().then(function(text) {
			expect(text.trim().length).toBeGreaterThan(0);
		});
	});

	it("Must delete a data from a medicamentos list", function() {
		var before = pageInfo.getListLength();
		pageInfo.removeFirstItemFromList();
		var after = pageInfo.getListLength();

		expect(after).toBeLessThan(before);
	});

});