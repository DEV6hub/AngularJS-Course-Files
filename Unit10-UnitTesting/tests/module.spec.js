/* global module, jasmine,describe, beforeEach, angular, it, expect */

'use strict()';

describe('Testing Module: MyApp', function () {

  var MyApp,
    dependencies,
    // Create a helper function to test whehter a dependency is present
    hasModule = function (m) {
      return dependencies.indexOf(m) >= 0;
    };

  beforeEach(module('MyApp'));

  beforeEach(function () {
    MyApp = angular.module('MyApp');
    dependencies = MyApp.value('MyApp').requires;
  });

  it('should be registered', function () {
    expect(MyApp).toBeDefined();
    expect(MyApp.name).toEqual('MyApp');
    expect(dependencies).toEqual(jasmine.any(Array));
  });

  it('should have ngTouch as a dependency', function () {
    expect(hasModule('ngTouch')).toBe(true);
  });
});
