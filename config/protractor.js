var config = require("./config.js")();

exports.config = {
	sauceUser: config.sauceUser,
	sauceKey: config.sauceKey,
	capabilities: {
		"name": config.sauceTestName,
		"browserName": "chrome",
		"tunnel-identifier": config.travisJobNumber,
		"build": config.travisBuild
	},
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