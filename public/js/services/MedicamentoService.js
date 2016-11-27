angular.module("myPharmaco").factory("Medicamento", function($resource) {
	return $resource("/medicamentos/:id");
});