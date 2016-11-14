var checkAuthentication = function(req, res, next) {
	if(req.isAuthenticated()) return next();

	res.status(401).json("You are not authorized");
};

module.exports = function(app) {
	var controller = app.controllers.medicamento;

	app.route("/medicamentos")
		.get(checkAuthentication, controller.medicamentos)
		.post(checkAuthentication, controller.saveMedicamento);

	app.route("/medicamentos/:id")
		.get(checkAuthentication, controller.getMedicamento)
		.delete(checkAuthentication, controller.medicamentoRemove);
};
