module.exports = function(app) {
	var controller = app.controllers.medicamento;

	app.route("/medicamentos")
		.get(controller.medicamentos)
		.post(controller.saveMedicamento);

	app.route("/medicamentos/:id")
		.get(controller.getMedicamento)
		.delete(controller.medicamentoRemove);
};
