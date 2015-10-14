(function () {
  'use strict';

  angular.module('FilmApp').directive('film', film);

  function film() {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/film.html',
      replace: true,
      scope: {
        film: '=',
        index: '=',
        remove: '&'
      }
    };
  }

})();
