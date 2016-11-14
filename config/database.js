var mongoose = require("mongoose");

module.exports = function(uri) {
	mongoose.connect(uri);

	mongoose.connection.on("connected", function() {
		console.log("Mongoose is connected on " + uri);
	});

	mongoose.connection.on("disconnected", function() {
		console.log("Mongoose was disconnected from " + uri);
	});

	mongoose.connection.on("error", function(error) {
		console.log("There was an error with connection " + error);
	});

	process.on("SIGINT", function() {
		mongoose.connection.close(function() {
			console.log("Mongoose was disconnected by application");
			process.exit(0);
		});
	});
};