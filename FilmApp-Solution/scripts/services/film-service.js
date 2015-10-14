(function () {
  'use strict';

  angular.module('FilmApp').service('filmService', filmService);

  filmService.$inject = ['$localStorage'];

  function filmService($localStorage) {
    var films = [];

    if ($localStorage.films && $localStorage.films.length) {
      films = $localStorage.films;
    }

    this.list = function () {
      return films;
    };

    this.addFilm = function(film) {
      films.push(film);
      $localStorage.films = films;
      return films;
    };

    this.removeFilm = function (film) {
      for (var i = 0; i < films.length; i++) {
        if (films[i] === film) {
          films.splice(i, 1);
          break;
        }
      }
      $localStorage.films = films;
      return films;
    };
  }

})();
