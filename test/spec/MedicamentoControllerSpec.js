describe("MedicamentoController", function() {

	var $scope;

	beforeEach(function() {
		module("myPharmaco");
		inject(function($injector) {
			$scope = $injector.get("$rootScope").$new();
		});
	});

	it("Must create a Medicamento empty when no one route parameter were passed", inject(function($controller) {
		$controller("MedicamentoController", {"$scope": $scope});
		expect($scope.medicamento._id).toBeUndefined();
	}));

});