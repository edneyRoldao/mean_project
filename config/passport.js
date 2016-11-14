var passport = require("passport");
var GithubStrategy = require("passport-github").Strategy;
var mongoose = require("mongoose");

module.exports = function() {

	var User = mongoose.model("User");

	var credentials = {
		clientID: "105a3ae46828e13ad251",
		clientSecret: "c620f07fded5078e241e9c44afe5eb68820a3fcb",
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