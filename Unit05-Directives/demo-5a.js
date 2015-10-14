/* global angular */
(function () {
  'use strict';

  angular
    .module('MyApp', [])
    .directive('expandable', expandable);

  function expandable() {
    var directive = {
      link: linkFunction
    };
    return directive;

    //directive methods
    function linkFunction(scope, element, attrs) {
      var isVisible = true;

      // Find the first div inside the element and make it a jqLite/jQuery object
      var header = angular.element(element.find('div')[0]);
      var content = angular.element(element.find('div')[1]);

      // List out all of the attributes defined on the HTML tag where the directive is used
      console.debug('attribues are: ', attrs);

      console.log('Inside link!');
      console.log("element.find('div')[0]", element.find('div')[0]);
      console.log('header', header);
      console.log('content', content);

      // Show/Hide the content when the header is clicked
      header.bind('click', function () {
        console.log('click!');
        isVisible = !isVisible;
        content.css('display', isVisible ? 'block' : 'none');
      });
    }
  }

})();
