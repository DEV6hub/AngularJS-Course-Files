/* global angular, s */
(function () {
  'use strict';

  // *** Remember to start the server! ***

  angular
    .module('MyApp', [])
    .factory('httpService', httpService)
    .controller('MyCtrl', MyCtrl)
    .filter('titleCase', titleCaseFilter);

  httpService.$inject = ['$http'];

  function httpService($http) {
    var factory = {

      query: function () {
        var promise = $http({
          method: 'GET',
          url: 'http://localhost:3000/getUsers'
        });
        return promise;
      }
    };

    return factory;
  }

  MyCtrl.$inject = ['httpService'];

  function MyCtrl(httpService) {
    var vm = this;
    vm.users = [];
    vm.getUsers = function () {
      var promise = httpService.query();
      promise.then(
        function success(result) {
          console.log('result: ', result);
          vm.users = result.data;
        },
        function failure(error) {
          console.log('error: ', error);
        }
      );
    };
  }

  // Define a new filter that changes an input string to Title case
  function titleCaseFilter() {
    return function (input) {
      console.log('input: ', input);
      return s.capitalize(input);
    };
  }

})();
