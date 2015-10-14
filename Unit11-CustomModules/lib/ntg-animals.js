/* global angular */
'use strict()';

angular.module('ntgAnimals', [])
  .directive('simple', simple)
  .filter('formatDate', formatDate)
  .factory('animal', animal);

function simple() {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.addClass('simple');
    }
  };
}

formatDate.$inject = ['$filter'];

function formatDate($filter) {
  return function (date) {
    var d = new Date(date),
      returnDate;
    returnDate = $filter('date')(new Date(d.getFullYear(), d.getMonth(), d.getDate()), 'MMMM d, yyyy');
    return (date ? returnDate : '');
  };
}

function animal() {
  var currentAnimal = {};

  var emptyAnimal = {
    id: '0',
    name: ''
  };

  var animalService = {
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

  return animalService;
}
