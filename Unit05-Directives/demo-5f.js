/* global angular */
(function () {
  'use strict';

  angular
    .module('MyApp', [])
    .directive('component', component);

  function component() {
    var directive = {
      scope: {
        test: '@'
      },
      // Define a controller for your directive's template
      controller: controllerFunc,
      controllerAs: 'ctrl',
      // Bind your isolated scope properties to your controller's 'this'
      bindToController: true,
      template: '<div>{{ctrl.test}}</div>'
    };

    return directive;

    function controllerFunc() {
      var vm = this;
      vm.test = 'Property of directive controller';
    }
  }

})();
