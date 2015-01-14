/* jshint -W097 */
'use strict';

var app = angular.module('MyApp', []);

app.controller('AppCtrl', ['$rootScope', '$scope', function ($scope, $rootScope) {

	$scope.model = {
		typingText : 'nothing yet'
	};

	$scope.$on('my.custom.event', function (event, data) {
		console.log('data', data);
		$scope.model.typingText = data.text;

		$rootScope.$broadcast('my.custom.event.success', {text : 'Got it at ' + (new Date())});
	});

}]);

app.controller('InnerCtrl', ['$scope', function ($scope) {


}]);
