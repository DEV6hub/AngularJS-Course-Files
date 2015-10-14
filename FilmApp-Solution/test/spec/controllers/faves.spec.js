'use strict()';

describe('Testing Controller: FavesCtrl', function () {

  beforeEach(module('FilmApp'));

  var FavesCtrl;

  beforeEach(inject(function ($rootScope, $controller) {
    var scope = $rootScope.$new();

    FavesCtrl = $controller('FavesCtrl', {
      $scope: scope
    });
  }));

  it('should exist', function () {
    expect(FavesCtrl).toBeDefined();
  });
});
