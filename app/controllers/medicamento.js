var sanitize = require("mongo-sanitize");

module.exports = function(app) {

	var controller = {};
	var Medicamento = app.models.medicamento;

	// list medicamentos
	controller.medicamentos = function(req, res) {
		var success = function(medicamentos) {res.json(medicamentos);};
		var errors = function(error) {res.status(500).json(error);};
		var promise = Medicamento.find().exec();

		promise.then(success, errors);
	};

	// find one medicamento by id
	controller.getMedicamento = function(req, res) {
		var _id = req.params.id;
		var promise = Medicamento.findById(_id).exec();

		var success = function(medicamento) {
			if(!medicamento) throw new Error("medicamento does not exist");
			res.json(medicamento);
		};

		var errors = function(error) {
			console.log(error);
			res.status(404).json(error);
		};

		promise.then(success, errors);
	};

	// Remove medicamentos
	controller.medicamentoRemove = function(req, res) {
		var _id = sanitize(req.params.id);
		var promise = Medicamento.remove({"_id": _id}).exec();
		var success = function() {res.status(204).end();};
		var errors = function(error) {return console.error(error);};

		promise.then(success, errors);
	};

	// Add a medicine
	controller.saveMedicamento = function(req, res) {
		var _id = req.body._id;

		var data = {
			"nome": req.body.nome,
			"fabricante": req.body.fabricante
		};

		var errors = function(error) {
			console.log(error);
			res.status(500).json(error);
		};

		if(_id) {
			var promise = Medicamento.findByIdAndUpdate(_id, data).exec();
			var success = function(med) { res.json(med); };
			promise.then(success, errors);
		}else {
			var promise = Medicamento.create(data);
			var success = function(med) { res.status(201).json(med); };
			promise.then(success, errors);
		}
	};

	return controller;
};