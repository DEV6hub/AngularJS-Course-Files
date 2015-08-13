'use strict';

var app = angular.module('MyApp', []);

app.config(function ($logProvider) {
  $logProvider.debugEnabled(false);
});

app.config(function ($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $httpProvider.defaults.headers.common.Accept = 'application/json';
  $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
  $httpProvider.defaults.headers.post = {
    'Content-Type': 'application/json'
  };
  $httpProvider.interceptors.push('authInterceptor'); //'spinnerInterceptor'
});

/*

There are two kinds of interceptors (and two kinds of rejection interceptors):

  request: interceptors get called with a http config object. The function is free to modify the config object or create a new one. The function needs to return the config object directly, or a promise containing the config or a new config object.

  requestError: interceptor gets called when a previous interceptor threw an error or resolved with a rejection.

  response: interceptors get called with http response object. The function is free to modify the response object or create a new one. The function needs to return the response object directly, or as a promise containing the response or a new response object.

  responseError: interceptor gets called when a previous interceptor threw an error or resolved with a rejection.

*/

app.factory('authInterceptor', function ($q, $rootScope) {
  return {
    responseError: function (rejection) {
      if (rejection.status === 401) {
        $rootScope.$emit('request.unauthorized');
      }
      return $q.reject(rejection);
    }
  };
});

app.controller('MyCtrl', ['$scope', '$log', function ($scope, $log) {
  $scope.model = {
    countries: [
      {
        name: 'Brazil',
        gdp: '2392958'
   },
      {
        name: 'Colombia',
        gdp: '500573'
   },
      {
        name: 'Argentina',
        gdp: '756226'
   },
      {
        name: 'Peru',
        gdp: '322355'
   },
      {
        name: 'Venezuela',
        gdp: '396753'
   }
  ]
  }
  $log.info('Logging relevant info up MyCtrl');
  $log.log('Simple, unformatted message')
  $log.error('Some error thing happened.')
  $log.warn('Warning message, something potentially wrong')
  $log.debug('this is a debug message: ' + JSON.stringify($scope.model.countries));
}]);