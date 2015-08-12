'use strict';

var app = angular.module('MyApp', []);

app.factory('httpService', ['$http', function ($http) {

  var httpService = {

    send: function () {
      var promise = $http({
        method: 'POST',
        url: 'http://localhost:3000/getUsers'
      });
      return promise;
    }
  };

  return httpService;
}]);

app.controller('MyCtrl', ['$scope', 'httpService', '$q', function ($scope, httpService, $q) {
  $scope.model = {
    users: []
  };

  $scope.getUsers = function () {
    var promise = httpService.send();
    promise.then(
        function success(result) {
          console.log('result: ', result);
          $scope.model.users = result.data;

          var deferred = $q.defer();
          deferred.resolve('I passed this along the chain!');
          return deferred.promise;
        },
        function failure(error) {
          console.log('error: ', error);
        }
      )
      .then(
        function success(result) {
          console.log(result);
          alert(result);
        }
      );
  };

}]);