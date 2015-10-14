(function () {
  'use strict';

  angular.module('FilmApp').controller('FavesCtrl', FavesCtrl);

  FavesCtrl.$inject = ['filmService'];

  function FavesCtrl(filmService) {
    var vm = this;

    vm.films = filmService.list();
    vm.search = '';

    vm.removeFilm = function (film) {
      filmService.removeFilm(film);
    };
  }

})();
