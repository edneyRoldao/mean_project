describe("Main Page", function() {
	
	beforeEach(function() {
		browser.get("http://localhost:3000/#/medicamentos");
	});

	it("Must be signed in", function() {
		element(by.id("user-logged")).getText()
		.then(function(text) {
			expect(text.trim().length).toBeGreaterThan(0);
		});
	});

});