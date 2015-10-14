'use strict';

describe('Service: filmService', function () {

  // load the service's module
  beforeEach(module('FilmApp'));

  // instantiate service
  var filmService;

  beforeEach(inject(function (_filmService_) {
    filmService = _filmService_;
  }));

  it('should exist', function () {
    expect(filmService).toBeDefined();
  });

  it('should have some public functions', function(){
    expect(filmService.list).toEqual(jasmine.any(Function));
    expect(filmService.addFilm).toEqual(jasmine.any(Function));
    expect(filmService.removeFilm).toEqual(jasmine.any(Function));
  });

  it('should return a list of films', function(){
    expect(filmService.list()).toEqual(jasmine.any(Array));
  })

});
