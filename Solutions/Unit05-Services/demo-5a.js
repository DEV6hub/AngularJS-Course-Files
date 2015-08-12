'use strict()';

var app = angular.module('MyApp', []);

app.factory('user', [function () {

  //var foo = ;

  return {
    firstName: 'Misko',
    lastName: 'Hevery'
  };
}]);

app.controller('MyCtrl', ['$scope', 'user', function ($scope, user) {
  $scope.model = {
    user: user
  };
}]);

app.controller('OtherCtrl', ['$scope', 'user', function ($scope, user) {
  var myuser = user;
  $scope.model = {
    user: myuser
  };
}]);

app.service('userService', [function () {
  this.firstName = 'Misko';
  this.lastName = 'Hevery';
}]);