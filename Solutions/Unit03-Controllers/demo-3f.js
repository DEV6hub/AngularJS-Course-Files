/* jshint -W097 */
'use strict';

var app = angular.module('MyApp', []);

app.controller('ParentCtrl', ['$scope', function ($scope) {
  $scope.property = 'Property of parent controller';
}]);

app.controller('ChildCtrl', ['$scope', function ($scope) {
  $scope.property = 'Property of child controller';
}]);

//Note: not using $scope
app.controller('ParentCtrl2', [function () {
  this.property = 'Property of parent2 controller';
}]);

//Note: not using $scope
app.controller('ChildCtrl2', [function () {
  this.property = 'Property of child2 controller'; 
}]);