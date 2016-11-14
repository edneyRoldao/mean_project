var mongoose = require("mongoose");
var findOrCreate = require("mongoose-findorcreate");

module.exports = function() {

	var schemaObj = {
		login: {
			type: String,
			required: true,
			index: {unique: true}
		},
		name: {
			type: String,
			required: true
		},
		inclusion: {
			type: Date,
			default: Date.now
		}
	};

	var schema = mongoose.Schema(schemaObj);
	schema.plugin(findOrCreate);

	return mongoose.model("User", schema);
};