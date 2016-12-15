var http = require("http");
var app = require("./config/express")();
var config = require("./config/config.js")();
require("./config/passport.js")();
require("./config/database.js")(config.db);

http.createServer(app).listen(app.get("port"), function() {
	console.log("express server is listen to on port: " + app.get("port"));
});