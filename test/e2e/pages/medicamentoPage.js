var medicamentoPage = function() {
	this.visit = function() {
		browser.get("http://localhost:3000/#/medicamento");
	};

	this.typeName = function(name) {
		element(by.model("medicamento.nome")).sendKeys(name);
	};

	this.typeFactory = function(factoryName) {
		element(by.model("medicamento.fabricante")).sendKeys(factoryName);
	};

	this.save = function() {
		element(by.css(".btn-primary")).click();
	};

	this.getMessage = function() {
		return element(by.binding("message.text")).getText();
	};
};

module.exports = medicamentoPage;