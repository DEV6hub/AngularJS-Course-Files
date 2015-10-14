/* global angular */
(function () {
  'use strict';

  angular
    .module('MyApp', [])
    .directive('attributeOnlyDirective', attributeOnlyDirective);

  function attributeOnlyDirective() {
    var directive = {
      // Restrict use of this directive to Attributes only
      restrict: 'A',
      compile: compileFunc
    };

    return directive;

    function compileFunc(tElement, attributes) {
      //Note: No access to scope here
      //Note: tElement = template element, meaning uncompiled DOM element
      console.log('This is the compile function.');
      console.log(tElement, attributes);
      console.log(attributes);

      //Note: We can manipulate the actual element here
      var newElement = angular.element('<div>' + attributes.attributeOnlyDirective + '</div>');
      tElement.append(newElement);

      return linkFunction; //we return the linking function if we need it.
    }

    function linkFunction(scope, element, attrs) {
      console.debug('linking function: ', scope, element, attrs);
    }
  }

})();
