var http = require("http");
var app = require("./config/express")();
require("./config/passport.js")();
require("./config/database.js")("mongodb://localhost/mypharmaco");

http.createServer(app).listen(app.get("port"), function() {
	console.log("express server is listen to on port: " + app.get("port"));
});