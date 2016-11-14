angular.module("myPharmaco").config(function($httpProvider) {
	$httpProvider.interceptors.push("UnauthorizedInterceptor");
});