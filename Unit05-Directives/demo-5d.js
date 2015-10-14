/* global angular */
(function () {
  'use strict';

  angular
    .module('MyApp', [])
    .directive('makeItCool', coolDirective);

  function coolDirective() {
    var directive = {
      // Restrict use of this directive to Elements only
      restrict: 'E',
      // Define an inline template to be loaded by the directive
      template: '<div class="alert alert-success">The temperature is -40c!</div>',
      link: linkFunction
    };

    return directive;

    function linkFunction(scope, element) {
      // The element is the custom HTML tag we have defined
      console.log(element);
      console.log(element.children());

      element.bind('mouseover', function () {
        element.children()[0].classList.toggle('alert-default');
        element.children()[0].classList.toggle('alert-info');
      });
    }
  }

})();
