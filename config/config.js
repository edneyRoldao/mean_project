module.exports = function() {
	return require("./environment/" + process.env.NODE_ENV + ".js");
};