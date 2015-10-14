/*global angular*/
(function () {
  'use strict';

  angular
  // Inject the ngResource module into our app
    .module('MyApp', ['ngResource'])
    .config(loggingConfig)
    .config(httpConfig)
    .factory('demoInterceptor', demoInterceptor)
    .controller('MyCtrl', MyCtrl);

  // Inject the provider for the $log service
  loggingConfig.$inject = ['$logProvider'];

  // Configure the display of $log.debug() messages in the console
  function loggingConfig($logProvider) {
    $logProvider.debugEnabled(true);
  }


  httpConfig.$inject = ['$httpProvider'];

  // Set configuration options for all XHR requests
  function httpConfig($httpProvider) {
    $httpProvider.defaults.headers.common.Accept = 'application/json';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $httpProvider.interceptors.push('demoInterceptor');
  }


  // https://docs.angularjs.org/api/ng/service/$http
  // NOTE: There are two kinds of interceptors (and two kinds of rejection interceptors):
  // request: interceptors get called with a http config object. The function is free to modify the config object or create a new one.
  //    The function needs to return the config object directly, or a promise containing the config or a new config object.
  // requestError: interceptor gets called when a previous interceptor threw an error or resolved with a rejection.
  // response: interceptors get called with http response object. The function is free to modify the response object or create a new one.
  //    The function needs to return the response object directly, or as a promise containing the response or a new response object.
  // responseError: interceptor gets called when a previous interceptor threw an error or resolved with a rejection.

  demoInterceptor.$inject = ['$q', '$rootScope', '$log'];

  function demoInterceptor($q, $rootScope, $log) {
    return {
      response: function (response) {
        $log.debug('Intercepted Response: ', response);
        //do something with the response
        return $q.resolve(response);
      },
      responseError: function (rejection) {
        if (rejection.status === 401) {
          $rootScope.$emit('request.unauthorized');
        }
        return $q.reject(rejection);
      }
    };
  }

  // Inject the $resource factory to be able to talk to RESTful APIs
  MyCtrl.$inject = ['$log', '$resource'];

  function MyCtrl($log, $resource) {
    var vm = this;

    // Create a new 'Countries' resource object
    var Countries = $resource('http://localhost:3000/countries');
    vm.countries = Countries.query();
    /*
      Calls GET http://localhost:3000/countries and returns the array response.
      Replaces the following code:

      var countries = [];

      $http.get('http://localhost:3000/countries')
        .then( function(response) {
          countries = response.data
        })
    */




    $log.info('Logging relevant info up MyCtrl');
    $log.log('Simple, unformatted message');
    $log.error('Some error thing happened.');
    $log.warn('Warning message, something potentially wrong');
    $log.debug('this is a debug message: ' + JSON.stringify(vm.countries));
  }

})();
