/* global angular */
(function () {
  'use strict';

  angular
    .module('MyApp', [])
    .controller('AppCtrl', AppCtrl)
    .controller('InnerCtrl', InnerCtrl);

  // Define your injectable dependencies for minification purposes
  AppCtrl.$inject = ['$scope'];

  // Inject your dependencies
  function AppCtrl($scope) {
    var vm = this;
    vm.typingText = 'nothing yet';

    // Respond to the 'my.custom.event' event
    $scope.$on('my.custom.event', function (event, data) {
      console.log('data', data);
      vm.typingText = data.text;
    });
  }

  InnerCtrl.$inject = ['$scope'];

  function InnerCtrl($scope) {
    var vm = this;

    // Define a method on your controller
    vm.emitEvent = function () {

      // Emit the event 'my.custom.event' with some data up the scope chain
      $scope.$emit('my.custom.event', {
        text: 'Hello from the inner scope!'
      });
    };
  }

})();
