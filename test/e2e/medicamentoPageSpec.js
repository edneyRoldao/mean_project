describe("Insert Medicamento", function() {

	beforeEach(function() {
		browser.get("http://localhost:3000/#/medicamento");
	});

	it("Must to insert a medicamento", function() {
		var random = Math.floor((Math.random() * 10000000) + 1);
		var name = "nameTest" + random;
		var factory = "factoryTest" + random;

		element(by.model("medicamento.nome")).sendKeys(name);
		element(by.model("medicamento.fabricante")).sendKeys(factory);
		element(by.css(".btn-primary")).click();

		expect(element(by.binding("message.text")).getText()).toContain("Success");
	});

});