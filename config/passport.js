var passport = require("passport");
var GithubStrategy = require("passport-github").Strategy;
var mongoose = require("mongoose");
var config = require("./config.js")();

module.exports = function() {

	var User = mongoose.model("User");

	var credentials = {
		clientID: config.clientID,
		clientSecret: config.clientSecret,
		callbackURL: "http://localhost:3000/auth/github/callback"
	};

	var treatToken = function(accessToken, refreshToken, profile, done) {
		
		var login = {login: profile.username};
		var name = {name: profile.username};

		var callback = function(error, user) {
			if(error) {
				console.log(error);
				return done(error);
			}
			return done(null, user);
		};

		User.findOrCreate(login, name, callback);
	};

	passport.use( new GithubStrategy(credentials, treatToken) );

	passport.serializeUser(function(user, done) {
		done(null, user._id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id).exec().then(function(user) {
			done(null, user);
		});
	});
};