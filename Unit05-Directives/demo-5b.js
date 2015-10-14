/* global angular, _ */
(function () {
  'use strict';

  angular
    .module('MyApp', [])
    .directive('collapsed', collapsed);

  // Use the $log service instead of console
  collapsed.$inject = ['$log'];

  function collapsed($log) {
    var directive = {
      link: linkFunction
    };

    return directive;

    function linkFunction(scope, element, attrs) {
      // Property declarations in list format
      var isCollapsed = false,

        // Find the first element with the class 'header'
        header = angular.element(_.findWhere(element.children(), {
          className: 'header'
        })),

        // Find the first element with the class 'content'
        content = angular.element(_.findWhere(element.children(), {
          className: 'content'
        }));

      $log.debug('attributes are: ', attrs);

      $log.log('----------> scope ID: ' + scope.$id + ':');
      $log.log(scope);
      $log.debug('----------> scope ID: ' + scope.$id + ':');

      header.bind('click', function () {
        content.css('display', isCollapsed ? 'block' : 'none');
        isCollapsed = !isCollapsed;
        $log.log('After CLICK: isCollapsed: ', isCollapsed);
      });
    }
  }

})();
