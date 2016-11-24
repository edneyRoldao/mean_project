describe("MedicamentoController", function() {

	var $scope;
	var $httpBackend;

	beforeEach(function() {
		module("myPharmaco");
		inject(function($injector, _$httpBackend_) {
			$scope = $injector.get("$rootScope").$new();
			$httpBackend = _$httpBackend_;
			$httpBackend.when("GET", "/medicamento/1").respond({_id: "1"});
		});
	});

	it("Must create a Medicamento object empty when no one route parameter were passed", inject(function($controller) {
		$controller("MedicamentoController", {"$scope": $scope});
		expect($scope.medicamento._id).toBeUndefined();
	}));

	it("Should fill Medicamento object when parameters are passed", inject(function($controller) {
		$controller("MedicamentoController", {
			"$routeParams": {id: 1},
			"$scope": $scope
		});

		expect($scope.medicamento._id).toBeDefined();
	}));	

});