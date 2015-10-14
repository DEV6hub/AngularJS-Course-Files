(function () {
  'use strict';

  angular.module('FilmApp').factory('omdb', omdb);

  omdb.$inject = ['$http'];

  function omdb($http) {
    var factory = {
      search: function (search) {
        var promise = $http({
          method: 'GET',
          url: 'http://www.omdbapi.com/',
          params: {
            t: search
          }
        });
        return promise;
      }
    };

    return factory;
  }

})();
