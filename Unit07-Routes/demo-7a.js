/* global angular*/
(function () {
  'use strict';

  angular
  // Inject the ngRoute module into our app
    .module('MyApp', ['ngRoute'])
    .config(config)
    .controller('BlogCtrl', BlogCtrl)
    .controller('AppCtrl', AppCtrl)
    .controller('LoginCtrl', LoginCtrl)
    .controller('HomeCtrl', HomeCtrl);

  // Configure the $routeProvider to define our routes
  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/login', { // URL
        templateUrl: 'view/partials/login.html', // Template to load
        controller: 'LoginCtrl', // Controller to load
        controllerAs: 'login' // Controller alias to expose in the template
      })
      .when('/blog/page/:page/section/:section', { // URL with parameters
        templateUrl: 'view/partials/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/home', {
        templateUrl: 'view/partials/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      // Define a default route
      .otherwise({
        redirectTo: '/login'
      });
  }

  // Inject $location to gain access to what is in the browser's address bar
  AppCtrl.$inject = ['$location'];

  function AppCtrl($location) {
    var vm = this;
    vm.location = $location;
  }


  LoginCtrl.$inject = ['$location'];

  function LoginCtrl($location) {
    var vm = this;
    vm.email = '';
    vm.password = '';

    vm.login = function () {
      console.log('Login with these credentials', vm.email, vm.password);
      // Go to the /home route
      $location.path('/home');
    };
  }


  HomeCtrl.$inject = ['$location'];

  function HomeCtrl($location) {
    var vm = this;

    vm.logout = function () {
      $location.path('/');
    };
  }

  // Inject $routeParams to access the parameters defined in the route
  BlogCtrl.$inject = ['$location', '$routeParams'];

  function BlogCtrl($location, $routeParams) {
    var vm = this;
    vm.page = $routeParams.page;
    vm.section = $routeParams.section;

    // Keys in the query string also get extracted
    vm.search = $routeParams.search;

    vm.home = function () {
      $location.path('/home');
    };

    console.debug($routeParams.page + ' ' +
      $routeParams.section + ' ' + $routeParams.search);
  }

})();
