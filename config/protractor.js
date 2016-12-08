exports.config = {
	specs: ["../test/e2e/**/*.js"],
	onPrepare: function() {
		browser.get('http://localhost:3000/#/auth').then(function() {
			browser.driver.findElement(by.id('enter')).click();
			browser.driver.findElement(by.id('login_field')).sendKeys("edneyroldao@gmail.com");
			browser.driver.findElement(by.id('password')).sendKeys("Rem@69378");
			browser.driver.findElement(by.name('commit')).click();
		});
	}
};