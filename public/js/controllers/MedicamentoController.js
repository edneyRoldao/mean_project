angular.module("myPharmaco").controller("MedicamentoController", function($scope, $routeParams, $resource, Medicamento) {
	$scope.message = {text: ""};

	var getMedicamento = function(medicamento) {
		$scope.medicamento = medicamento;
	};

	var getError = function(error) {
		$scope.message.text = "It wasn't possible to get the medicine";
	};

	if($routeParams.id) {
		Medicamento.get({id: $routeParams.id}, getMedicamento, getError);
	}else {
		$scope.medicamento = new Medicamento();
	}

	$scope.save = function() {
		$scope.medicamento.$save().then(function() {
			$scope.message.text = "Success";
			$scope.medicamento = new Medicamento();	
		}).catch(function(error) {
			$scope.message.text = "it was not possible to save";
		});
	};


});

