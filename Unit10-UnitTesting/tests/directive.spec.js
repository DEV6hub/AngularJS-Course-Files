/* global module, angular, describe, beforeEach, inject, it, expect */

'use strict()';

describe('Testing Directives', function () {

  var scope,
    element;

  beforeEach(module('MyApp'));

  // Define and compile the directive
  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope;
    element = angular.element('<div simple></div>');
    element = $compile(element)(scope);
  }));

  it('should add the simple class', function () {
    expect(element.hasClass('simple')).toBe(true);
  });

});
