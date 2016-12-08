var medicamentosPage = function() {
	this.visit = function() {
		browser.get("http://localhost:3000/#/medicamentos");
	};

	this.getSignedUser = function() {
		return element(by.id("user-logged")).getText();
	};

	this.getListLength = function() {
		return element.all(by.repeater("med in medicamentos")).count();
	};

	this.removeFirstItemFromList = function() {
		element(by.repeater("med in medicamentos").row(0)).element(by.css(".btn")).click();
	};
};

module.exports = medicamentosPage;