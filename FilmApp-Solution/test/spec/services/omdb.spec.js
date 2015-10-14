'use strict()';

describe('Testing Service: omdb', function () {

  beforeEach(module('FilmApp'));

  var omdb, httpBackend;

  beforeEach(inject(function (_omdb_, $httpBackend) {
    omdb = _omdb_;
    httpBackend = $httpBackend;

    httpBackend.whenGET('http://www.omdbapi.com/?t=Ex+Machina').respond(
      '{' +
      ' "Title":"Ex Machina", ' +
      ' "Year":"2015", ' +
      ' "Rated":"R", ' +
      ' "Released":"24 Apr 2015", ' +
      ' "Runtime":"108 min", ' +
      ' "Genre":"Drama, Mystery, Romance", ' +
      ' "Director":"Alex Garland", ' +
      ' "Writer":"Alex Garland", ' +
      ' "Actors":"Domhnall Gleeson, Corey Johnson, Oscar Isaac, Alicia Vikander", ' +
      ' "Plot":"A young programmer is selected to participate in a ground-breaking experiment in artificial intelligence by evaluating the human qualities of a breath-taking female A.I.", ' +
      ' "Language":"English", ' +
      ' "Country":"UK, USA", ' +
      ' "Awards":"2 wins & 2 nominations.", ' +
      ' "Poster":"http://ia.media-imdb.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg", ' +
      ' "Metascore":"78", ' +
      ' "imdbRating":"7.7", ' +
      ' "imdbVotes":"171,549", ' +
      ' "imdbID":"tt0470752", ' +
      ' "Type":"movie", ' +
      ' "Response":"True" ' +
      ' }'
    );
  }));

  it('should exist', function () {
    expect(omdb).toBeDefined();
  });

  it('should search for a film', function () {
    expect(omdb.search).toEqual(jasmine.any(Function));

    httpBackend.expectGET('http://www.omdbapi.com/?t=Ex+Machina');
    omdb.search('Ex Machina');
    httpBackend.flush();
  })
});
