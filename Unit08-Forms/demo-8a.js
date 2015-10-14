/* global angular */
(function () {
  'use strict';

  angular
    .module('MyApp', ['ngRoute'])
    .config(config)
    .controller('AppCtrl', AppCtrl)
    .controller('LoginCtrl', LoginCtrl)
    .controller('HomeCtrl', HomeCtrl);

  config.$inject = ['$routeProvider'];

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
    console.log('AppCtrl init');
  }


  LoginCtrl.$inject = ['$location', '$window'];

  function LoginCtrl($location, $window) {
    var vm = this;
    console.log('LoginCtrl init');

    vm.email = '';
    vm.password = '';

    // Accepts a form object
    vm.login = function (loginForm) {

      console.log('loginForm: ', loginForm);

      if (loginForm.$valid) {
        $location.path('/home');
      } else {
        // Refer to $window instead of "window" for easier testing
        $window.alert('Invalid form!');
      }
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
