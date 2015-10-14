(function () {
  'use strict';

  angular.module('FilmApp').controller('WatchedCtrl', WatchedCtrl);

  WatchedCtrl.$inject = ['filmService'];

  function WatchedCtrl(filmService) {
    var vm = this;

    vm.films = filmService.list();
    vm.search = '';

    vm.removeFilm = function (film) {
      filmService.removeFilm(film);
    };
  }

})();
