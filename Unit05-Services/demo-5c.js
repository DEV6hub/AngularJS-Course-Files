'use strict';

var app = angular.module('MyApp', []);

app.config(function ($logProvider) {

});

app.controller('MyCtrl', ['$scope', '$log', function ($scope, $log) {
	$scope.model = {
		countries: [
			{
				name: 'Brazil',
				gdp: '2392958'
			},
			{
				name: 'Colombia',
				gdp: '500573'
			},
			{
				name: 'Argentina',
				gdp: '756226'
			},
			{
				name: 'Peru',
				gdp: '322355'
			},
			{
				name: 'Venezuela',
				gdp: '396753'
			}
		]
	}
    
	
}]);

