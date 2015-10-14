(function () {
  'use strict';

  angular.module('FilmApp').directive('filmList', filmList);

  function filmList() {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/film-list.html',
      scope: {
        films: '=',
        search: '=',
        remove: '&',
        show: '@'
      }
    };
  }

})();
