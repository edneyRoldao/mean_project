angular.module("myPharmaco").controller("MedicamentosController", function($scope, $resource, Medicamento) {

	$scope.medicamentos = [];
	$scope.medNameFilter = "";
	$scope.message = {text: ""};

	$scope.init = function() {
		findMedicamentos();
	};

	function findMedicamentos() {
		Medicamento.query(function(medicamentos) {
			$scope.medicamentos = medicamentos;
		}, function(error) {
			$scope.message.text = "It wasn't able to get medicamentos list";
			console.log("It wasn't able to get medicamentos list");
			console.log(error);
		});
	}

	$scope.remove = function(med) {
		Medicamento.delete({id: med._id}, findMedicamentos, function(error) {
			$scope.message.text = "It wasn't able to remove the medicine";
			console.log("It wasn't able to remove the medicine");
			console.log(error);
		});
	};

	$scope.init();
});