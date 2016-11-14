var express = require("express");
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
	var app = express();

	// port server configuration from a global variable 
	app.set("port", 3000);

	// Middleware for our static resources
	app.use(express.static("./public"));

	// There are some browers that does not accept http verbs like PUT and DELETE.
	// The line below are used to convert these verbs in POST without any other code instead. 
	app.use( bodyParser.urlencoded( {extended: true} ) );
	app.use( bodyParser.json() );
	app.use( require('method-override')() );	

	// There is a logical dependency among models, controllers and routes.
	// We do not need use require for import these js files each other with the follow code. 
	load('models', {cwd: 'app'}).then('controllers').then('routes').into(app);

	return app;
};