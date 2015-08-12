/* jshint -W097 */
'use strict';

var app = angular.module('MyApp', []);

app.directive('demo', [function () {
  return {
    scope: {
      test: '@'
    },
    controller:  function () {
      this.test = 'Property of directive controller'
    },
    controllerAs: 'Ctrl',
    bindToController: true,
    template: '<div>{{Ctrl.test}}</div>'
  };
}]);
