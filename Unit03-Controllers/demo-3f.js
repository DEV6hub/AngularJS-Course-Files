/* global angular */
(function () {
  'use strict';

  angular
    .module('MyApp', [])
    .controller('AppCtrl', AppCtrl);

  function AppCtrl() {
    var vm = this;

    vm.userInput = '';
    vm.sports = [
      'Basketball',
      'Tennis',
      'Hockey',
      'Soccer',
      'Baseball'
    ];

    vm.getUserInput = function () {
      alert(vm.userInput);
    };
  }

})();
