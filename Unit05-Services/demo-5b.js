'use strict';

//make sure to start up the node server!

var app = angular.module('MyApp', []);



app.controller('MyCtrl', ['$scope', function ($scope) {
	$scope.model = {
		users : []
	}

}]);

