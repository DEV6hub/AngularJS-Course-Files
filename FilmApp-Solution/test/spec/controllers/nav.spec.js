'use strict()';

describe('Testing Controller: NavCtrl', function () {

  beforeEach(module('FilmApp'));

  var NavCtrl;

  beforeEach(inject(function ($rootScope, $controller) {
    var scope = $rootScope.$new();

    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  it('should exist', function () {
    expect(NavCtrl).toBeDefined();
  });

  it('should confirm controller properties', function () {
    expect(NavCtrl.hideList).toBe(true);
  });

  it('should toggle the list view', function () {
    expect(typeof NavCtrl.toggleList).toEqual('function');
    NavCtrl.toggleList();
    expect(NavCtrl.hideList).toBe(false);
  });
});
