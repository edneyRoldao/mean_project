var MedicamentoPage = require("./pages/medicamentoPage.js");

describe("Insert Medicamento", function() {
	var pageInfo = new MedicamentoPage();

	beforeEach(function() {
		pageInfo.visit();
	});

	it("Must to insert a medicamento", function() {
		var random = Math.floor((Math.random() * 10000000) + 1);
		var name = "nameTest" + random;
		var factory = "factoryTest" + random;

		pageInfo.typeName(name);
		pageInfo.typeFactory(factory);
		pageInfo.save();

		expect(pageInfo.getMessage()).toContain("Success");
	});

});