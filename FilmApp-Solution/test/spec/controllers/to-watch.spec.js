'use strict()';

describe('Testing Controller: ToWatchCtrl', function () {

  beforeEach(module('FilmApp'));

  var scope, ToWatchCtrl, $localStorage;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();

    ToWatchCtrl = $controller('ToWatchCtrl', {
      $scope: scope
    });
  }));

  it('should exist', function () {
    expect(ToWatchCtrl).toBeDefined();
  });

  it('should have these controller functions', function () {
    expect(typeof ToWatchCtrl.addFilm).toEqual('function');
    expect(typeof ToWatchCtrl.addSearchedFilm).toEqual('function');
    expect(typeof ToWatchCtrl.fetchFilm).toEqual('function');
    expect(typeof ToWatchCtrl.removeFilm).toEqual('function');
  });

  it('should have these controller properties', function () {
    expect(ToWatchCtrl.film).toEqual(jasmine.any(Object));
    expect(ToWatchCtrl.result).toEqual({});
    expect(ToWatchCtrl.films).toEqual(jasmine.any(Array));
    expect(ToWatchCtrl.searchList).toEqual('');
    expect(ToWatchCtrl.searchOMDB).toEqual('');
    expect(ToWatchCtrl.loading).toBe(false);
  });

});
