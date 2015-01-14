'use strict';

var app = angular.module('MyApp', []);

app.controller('AppCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.motorcycle = 'Honda CBR-1000RR';
	$scope.model = {
		motorcycle: 'Honda CBR-1000RR'
	}
	console.log('$rootScope.$id: ' + $rootScope.$id);
	console.log('$scope.$id: ' + $scope.$id);
	console.log('$scope.parent.$id: ' + $scope.$parent.$id);
}]);

app.controller('ChildCtrl', ['$scope', function ($scope) {
	$scope.model = {
		motorcycle: 'Kawasaki Z1000 ABS Sport'
	}
	console.log('$scope.$id: ' + $scope.$id);
	console.log('$scope.parent.$id: ' + $scope.$parent.$id);
}]);

app.controller('GrandChildCtrl', ['$scope', function ($scope) {
	$scope.motorcycle = 'Harley Davidson Street 750';
	console.log('$scope.$id: ' + $scope.$id);
	console.log('$scope.parent.$id: ' + $scope.$parent.$id);
}]);
