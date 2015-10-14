/* global angular */
(function () {
  'use strict';

  angular
    .module('MyApp', [])
    .controller('AppCtrl', AppCtrl)
    .controller('InnerCtrl', InnerCtrl);

  AppCtrl.$inject = ['$scope', '$rootScope'];

  function AppCtrl($scope, $rootScope) {
    var vm = this;
    vm.typingText = 'nothing yet';

    $scope.$on('my.custom.event', function (event, data) {
      console.log('data', data);
      vm.typingText = data.text;

      // Broadcast the 'my.custom.event.success' event down through the entire scope chain
      $rootScope.$broadcast('my.custom.event.success', {
        text: 'Got it at ' + (new Date())
      });
    });
  }

  InnerCtrl.$inject = ['$scope'];

  function InnerCtrl($scope) {
    var vm = this;

    // Initialize your controller properties
    vm.ackCount = 0;
    vm.lastMessage = '';

    vm.emitEvent = function () {
      $scope.$emit('my.custom.event', {
        text: 'Hello from the inner scope!'
      });
    };

    // Respond to the 'my.custom.event.success' event
    $scope.$on('my.custom.event.success', function (event, data) {
      vm.ackCount++;
      vm.lastMessage = data.text;
    });
  }

})();
