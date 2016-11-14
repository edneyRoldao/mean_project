angular.module("myPharmaco", ["ngRoute", "ngResource"]).config(function($routeProvider) {

	$routeProvider.when("/medicamentos", {
		templateUrl: "partials/medicamentos.html",
		controller: "MedicamentosController"
	});

	$routeProvider.when("/medicamento/:id", {
		templateUrl: "partials/medicamento.html",
		controller: "MedicamentoController"
	});

	$routeProvider.when("/medicamento", {
		templateUrl: "partials/medicamento.html",
		controller: "MedicamentoController"
	});

	$routeProvider.when("/auth", {
		templateUrl: "partials/auth.html",
	});

	$routeProvider.otherwise( {redirectTo: "/medicamentos"} );
});