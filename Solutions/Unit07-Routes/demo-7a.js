/* global angular*/
'use strict';

var app = angular.module('MyApp', ['ngRoute']); // *** Add dependency

app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/login', {
      templateUrl: 'view/partials/login.html',
      controller: 'LoginCtrl'
    })
    .when('/home/myFoo/:foo/myBar/:bar', {
      templateUrl: 'view/partials/home.html',
      controller: 'BlogCtrl'
    })
    .when('/home', {
      templateUrl: 'view/partials/home.html',
      controller: 'HomeCtrl'
    })
    .otherwise({
      redirectTo: '/login'
    });
}]);

app.controller('BlogCtrl', ['$scope', '$location', '$routeParams', function ($scope, $location, $routeParams) {

  $scope.model = {};
  alert($routeParams.foo + ' ' +
    $routeParams.bar + ' ' + $routeParams.search);

}]);


app.controller('AppCtrl', ['$scope', '$location', function ($scope, $location) {

  $scope.model = {};

}]);

app.controller('LoginCtrl', ['$scope', '$location', function ($scope, $location) {

  $scope.login = function () {
    $location.path('/home');
  };

}]);

app.controller('HomeCtrl', ['$scope', '$location', '$routeParams', function ($scope, $location, $routeParams) {

  $scope.logout = function () {
    $location.path('/');

  };


}]);