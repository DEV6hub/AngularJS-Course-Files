/* global angular */
(function () {
  'use strict';

  angular
    .module('MyApp', ['ngRoute', 'ngAnimate'])
    .controller('AppCtrl', AppCtrl)
    .controller('LoginCtrl', LoginCtrl)
    .controller('HomeCtrl', HomeCtrl)
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'view/partials/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/home', {
        templateUrl: 'view/partials/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }

  function AppCtrl() {
    var vm = this;
  }


  LoginCtrl.$inject = ['$location'];

  function LoginCtrl($location) {
    var vm = this;
    vm.email = 'student@newyyz.com';
    vm.password = 'password';
    vm.checked = false;

    vm.login = function () {
      $location.path('/home');
    };
  }


  HomeCtrl.$inject = ['$location'];

  function HomeCtrl($location) {
    var vm = this;

    console.log('HomeCtrl init');

    vm.logout = function () {
      $location.path('/');
    };
  }

})();
