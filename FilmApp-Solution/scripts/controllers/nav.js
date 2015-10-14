(function () {
  'use strict';

  angular.module('FilmApp').controller('NavCtrl', NavCtrl);

  function NavCtrl() {
    var vm = this;

    vm.hideList = true;

    vm.toggleList = function () {
      vm.hideList = !vm.hideList;
    };

    vm.closeList = function () {
      vm.hideList = true;
    };
  }

})();
