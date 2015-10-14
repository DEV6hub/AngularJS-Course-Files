/* global angular */
(function () {
  'use strict';

  // Use a service to share data between controllers

  angular
    .module('MyApp', [])
    .controller('MyCtrl', MyCtrl)
    .controller('OtherCtrl', OtherCtrl)
    .factory('user', userFactory)
    .service('userService', userService);

  // Inject the user service into both controllers
  MyCtrl.$inject = ['user'];
  OtherCtrl.$inject = ['user'];

  function MyCtrl(user) {
    var vm = this;
    vm.user = user;
  }

  function OtherCtrl(user) {
    var vm = this;
    var userService = user;
    vm.user = userService;
  }

  // The service definition pattern
  function userService() {
    this.firstName = 'Misko';
    this.lastName = 'Hevery';
  }

  // The factory definition pattern
  function userFactory() {
    return {
      firstName: 'Misko',
      lastName: 'Hevery'
    };
  }

})();
