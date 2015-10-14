'use strict()';

describe('Testing Controller: WatchedCtrl', function () {

  beforeEach(module('FilmApp'));

  var WatchedCtrl;

  beforeEach(inject(function ($rootScope, $controller) {
    var scope = $rootScope.$new();

    WatchedCtrl = $controller('WatchedCtrl', {
      $scope: scope
    });
  }));

  it('should exist', function () {
    expect(WatchedCtrl).toBeDefined();
  });
});
