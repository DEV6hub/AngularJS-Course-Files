(function () {
  'use strict';

  angular.module('FilmApp').controller('ToWatchCtrl', ToWatchCtrl);

  ToWatchCtrl.$inject = ['filmService', 'omdb'];

  function ToWatchCtrl(filmService, omdb) {
    var vm = this;

    vm.film = {};
    vm.films = [];
    vm.loading = false;
    vm.result = {};
    vm.searchList = '';
    vm.searchOMDB = '';

    vm.addFilm = addFilm;
    vm.addSearchedFilm = addSearchedFilm;
    vm.fetchFilm = fetchFilm;
    vm.removeFilm = removeFilm;

    init();

    function init() {
      vm.films = filmService.list();
      resetForm();
    }

    function addFilm(form) {
      filmService.addFilm(vm.film);
      resetForm(form);
    }

    function addSearchedFilm() {
      filmService.addFilm({
        title: vm.result.Title,
        year: vm.result.Year,
        director: vm.result.Director,
        description: vm.result.Plot,
        watched: false,
        favourite: false
      });
    }

    function fetchFilm() {
      vm.loading = true;
      omdb.search(vm.searchOMDB)
        .then(
          function success(response) {
            vm.result = response.data;
          },
          function failure(error) {
            console.error('error: ', error);
          }
        )
        .finally(function () {
          vm.loading = false;
        });
    }

    function removeFilm(film) {
      filmService.removeFilm(film);
    }

    function resetForm(form) {
      vm.film = {
        title: undefined,
        year: undefined,
        director: undefined,
        description: undefined,
        watched: false,
        favourite: false
      };

      if (form) {
        form.$setPristine();
      }
    }
  }

})();
