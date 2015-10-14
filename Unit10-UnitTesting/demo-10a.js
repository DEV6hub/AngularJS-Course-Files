/* global angular */
(function () {
  'use strict';

  angular
    .module('MyApp', ['ngTouch'])
    .controller('AppCtrl', AppCtrl)
    .directive('simple', simple)
    .filter('formatDate', formatDate)
    .factory('animal', animal);

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

  function simple() {
    var directive = {
      restrict: 'A',
      link: linkFunc
    };
    return directive;

    function linkFunc(scope, element) {
      element.addClass('simple');
    }
  }

  formatDate.$inject = ['$filter'];

  function formatDate($filter) {
    return dateFilter;

    function dateFilter(date) {
      var d = new Date(date),
        returnDate;
      returnDate = $filter('date')(new Date(d.getFullYear(), d.getMonth(), d.getDate()), 'MMMM d, yyyy');
      return (date ? returnDate : '');
    }
  }

  function animal() {

    var currentAnimal = {};

    var emptyAnimal = {
      id: '0',
      name: ''
    };

    var animalFactory = {
      create: function () {
        angular.copy(emptyAnimal, currentAnimal);
      },

      get: function () {
        return currentAnimal;
      },

      put: function (newAnimal) {
        angular.copy(newAnimal, currentAnimal);
      }
    };

    return animalFactory;
  }

})();
