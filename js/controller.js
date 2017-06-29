var app = angular.module("filterApp", []);
app.controller("countryCntrl",function($scope) {
	$scope.names = [
		{name: 'Priti', country: 'India'},
		{name: 'Neethu', country: 'Denmark'},
		{name: 'Nithin', country: 'Oman'},
		{name: 'Ashik', country: 'Netherlands'},
		{name: 'Riya', country: 'China'},
		{name: 'Jacob', country: 'UAE'},
		{name: 'Smith', country: 'Australia'}
	];
	$scope.sort = function(x) {
		$scope.sortBy = x;
	}
});