/* global angular */
(function () {
  'use strict';

  // Simple refactor out of the directive, filter, and factory into a new module
  // and adding the module dependency here

  angular
  // Add new ntgAnimals module dependency
    .module('MyApp', ['ngTouch', 'ntgAnimals'])
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$http', 'animal'];

  function AppCtrl($http, animal) {
    var vm = this;

    vm.text = 'Free the following:';
    vm.now = new Date();
    vm.animals = [];
    vm.animal = {};

    animal.put({
      id: '299834923',
      name: 'Yet another free duck'
    });

    vm.animal = animal.get();

    $http.get('data/animals.json')
      .then(
        function success(response) {
          vm.animals = response.data.animals;
          console.log('vm.animals: ', vm.animals);
        },
        function error(response) {
          console.error('Error getting json file with response: ', response);
        }
      );
  }

})();
