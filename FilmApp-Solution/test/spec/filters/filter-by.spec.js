'use strict';

describe('Filter: filterBy', function () {

  // load the filter's module
  beforeEach(module('FilmApp'));

  var filterBy;
  var films = [{
    title: 'Finding Nemo',
    watched: false,
    favourite: true
  }, {
    title: 'Jaws',
    watched: true,
    favourite: false
  }];

  // initialize a new instance of the filter before each test
  beforeEach(inject(function ($filter) {
    filterBy = $filter('filterBy');
  }));

  it('should return only unwatched films', function () {
    var filteredFilms = [{
      title: 'Finding Nemo',
      watched: false,
      favourite: true
    }]

    expect(filterBy(films, 'to-watch')).toEqual(filteredFilms);
  });

  it('should return only favourite films', function () {
    var filteredFilms = [{
      title: 'Finding Nemo',
      watched: false,
      favourite: true
    }]

    expect(filterBy(films, 'favourite')).toEqual(filteredFilms);
  });

  it('should return only watched films', function () {
    var filteredFilms = [{
      title: 'Jaws',
      watched: true,
      favourite: false
    }]

    expect(filterBy(films, 'watched')).toEqual(filteredFilms);
  });

});
