/* global angular*/
(function () {
  'use strict';

  // *** Remember to start the server! ***

  angular
    .module('MyApp', [])
    .factory('httpService', httpService)
    .controller('MyCtrl', MyCtrl);

  // Inject the $http service to make XHR requests
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

  // Inject the $q service to make our own promises
  MyCtrl.$inject = ['httpService', '$q'];

  function MyCtrl(httpService, $q) {
    var vm = this;
    vm.users = [];

    vm.getUsers = function () {
      var promise = httpService.query();
      promise.then(
          // If the promise resolves successfully, run this function
          function success(result) {
            console.log('result: ', result);
            vm.users = result.data;

            // Create a new promise to pass along the chain
            var deferred = $q.defer();
            deferred.resolve('I passed this message as a success along the chain!');
            return deferred.promise;
          },
          // If the promise resolves with an error, run this function
          function failure(error) {
            console.log('error: ', error);

            // Create a new promise to pass along the chain
            var deferred = $q.defer();
            deferred.reject('I passed this message as a failure along the chain!');
            return deferred.promise;
          }
        )
        // Act on the promise being returned by success()
        // Nothing happens to the promise returned by failure() since we have not defined a handler for the error state
        .then(
          function success(result) {
            console.log(result);
            alert(result);
          }
        );
    };
  }

})();
