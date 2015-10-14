/* global angular */
(function () {
  'use strict';

  angular
    .module('MyApp', [])
    // Attach your controller function to your app
    .controller('AppCtrl', AppCtrl);

  // Define your controller
  function AppCtrl() {
    // Provide an alias for your controller
    var vm = this;

    // Define a property on your controller
    vm.typingText = 'nothing yet';
  }

})();
