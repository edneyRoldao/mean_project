var mongoose = require("mongoose");

mongoose.set("debug", true);

module.exports = function() {
	var schema = mongoose.Schema({
		nome: {type: String, required: true},
		fabricante: {type: String, required: true, index: {unique: true}}
	});

	return mongoose.model("Medicamento", schema);
};