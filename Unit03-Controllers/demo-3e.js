/* global angular */
(function () {
  'use strict';

  angular
    .module('MyApp', [])
    //Note: Controllers in Alphabetical Order for clarity
    .controller('ChildCtrl', ChildCtrl)
    .controller('ChildCtrl2', ChildCtrl2)
    .controller('ParentCtrl', ParentCtrl)
    .controller('ParentCtrl2', ParentCtrl2);

  ParentCtrl.$inject = ['$scope'];
  ChildCtrl.$inject = ['$scope'];

  function ParentCtrl($scope) {
    $scope.property = 'Property of parent controller';
  }

  function ChildCtrl($scope) {
    $scope.property = 'Property of child controller';
  }

  function ParentCtrl2() {
    var vm = this;
    vm.property = 'Property of parent2 controller';
  }

  function ChildCtrl2() {
    var vm = this;
    vm.property = 'Property of child2 controller';
  }

})();
