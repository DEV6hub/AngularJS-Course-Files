(function () {
  'use strict';

  angular
    .module('FilmApp', ['ngRoute', 'ngAnimate', 'ngStorage', 'ui.bootstrap'])
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/to-watch', {
        templateUrl: 'views/to-watch.html',
        controller: 'ToWatchCtrl',
        controllerAs: 'toWatch'
      })
      .when('/watched', {
        templateUrl: 'views/watched.html',
        controller: 'WatchedCtrl',
        controllerAs: 'watched'
      })
      .when('/faves', {
        templateUrl: 'views/faves.html',
        controller: 'FavesCtrl',
        controllerAs: 'faves'
      })
      .otherwise({
        redirectTo: '/to-watch'
      });
  }

})();
