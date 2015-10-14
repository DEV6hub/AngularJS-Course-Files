/* global angular */
(function () {
  'use strict';

  angular
    .module('MyApp', [])
    .controller('AppCtrl', AppCtrl)
    .directive('flight', flight);

  function AppCtrl() {
    var vm = this;

    vm.userName = 'J. Random Flyer';

    vm.flights = [{
      'name': 'AC2455',
      'from': 'YYZ',
      'to': 'JFK',
      'depart': '20:00:00EST',
      'arrive': '21:30:00EST'
    }, {
      'name': 'AC2456',
      'from': 'YYZ',
      'to': 'MIA',
      'depart': '17:00:00EST',
      'arrive': '20:30:00EST'
    }];

    vm.book = function (name) {
      alert(vm.userName + ' booked flight: ' + name);
    };
  }


  function flight() {
    var directive = {
      restrict: 'E',
      link: linkFunc,
      // Define an external template file to load into the directive
      templateUrl: 'flight-overview.html',
      scope: {
        name: '@', //access the value as a string
        select: '&', //pass in an expression that you can evaluate from inside the directive
        flight: '=' //two way binding between directive and controller
      }
    };

    return directive;

    function linkFunc(scope, element) {
      var bookButton = element.find('button');

      bookButton.bind('click', function ( /* event */ ) {
        console.log('selected flight: ' + scope.name);

        // Call the select function with the name argument mapped to scope.name
        scope.select({
          name: scope.name
        });
      });
    }
  }

})();
