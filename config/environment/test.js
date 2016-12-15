module.exports = {
	env: "test",
	db: "mongodb://localhost/my_pharmaco_test",
	sauceTestName: "my_pharmaco E2E Testing",
	sauceUser: process.env.SAUCE_USERNAME,
	sauceKey: process.env.SAUCE_ACCESS_KEY,
	travisJobNumber: process.env.TRAVIS_JOB_NUMBER,
	travisBuild: process.env.TRAVIS_BUILD_NUMBER,
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	seleniumUser: process.env.SELENIUM_USER,
	seleniumUserPassword: process.env.SELENIUM_USER_PASSWORD
};