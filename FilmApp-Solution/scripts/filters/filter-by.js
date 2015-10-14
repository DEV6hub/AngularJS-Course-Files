(function () {
  'use strict';

  angular.module('FilmApp').filter('filterBy', filterBy);

  function filterBy() {
    return function (input, state) {
      switch (state) {

      case 'to-watch':
        return input.filter(function (film) {
          return !film.watched;
        });

      case 'favourite':
        return input.filter(function (film) {
          return film.favourite;
        });

      case 'watched':
        return input.filter(function (film) {
          return film.watched;
        });

      default:
        return input;
      }
    };
  }
})();
