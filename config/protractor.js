var config = require("./config.js")();

exports.config = {
	specs: ["../test/e2e/**/*.js"],
	onPrepare: function() {
		browser.get('http://localhost:3000/#/auth').then(function() {
			browser.driver.findElement(by.id('enter')).click();
			browser.driver.findElement(by.id('login_field')).sendKeys(config.seleniumUser);
			browser.driver.findElement(by.id('password')).sendKeys(config.seleniumUserPassword);
			browser.driver.findElement(by.name('commit')).click();
		});
	}
};