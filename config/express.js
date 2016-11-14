var express = require("express");
var load = require('express-load');
var bodyParser = require('body-parser');
var session = require("express-session");
var passport = require("passport");
var cookieParser = require("cookie-parser");
var helmet = require("helmet");

module.exports = function() {
	var app = express();

	// port server configuration from a global variable 
	app.set("port", 3000);

	// Middleware for our static resources
	app.use(express.static("./public"));

	// Here we have the configuraions of our view engine, in this case ejs
	app.set("view engine", "ejs");
	app.set("views", "./app/views");

	// There are some browers that does not accept http verbs like PUT and DELETE.
	// The line below are used to convert these verbs in POST without any other code instead. 
	app.use( bodyParser.urlencoded( {extended: true} ) );
	app.use( bodyParser.json() );
	app.use( require('method-override')() );

	// Here we have the basics configurations to provide system logins from application.
	// for more details see: MEAN Book - page 195 and 234
	app.use( cookieParser() );
	app.use( session({secret: "finalfantasy", resave: true, saveUninitialized: true}) );
	app.use( passport.initialize() );
	app.use( passport.session() );	
	app.disable("x-powered-by");
	app.use( helmet.xframe() );
	app.use( helmet.xssFilter() );
	app.use( helmet.nosniff() );

	// There is a logical dependency among models, controllers and routes.
	// We do not need use require for import these js files each other with the follow code.
	// Here we have our route config 
	load('models', {cwd: 'app'}).then('controllers').then('routes').into(app);

	// We need to handler response status 404 in order to avoid that other find out what server we are using
	app.get("*", function(req, res) {
		res.status(404).render("404");
	});

	return app;
};