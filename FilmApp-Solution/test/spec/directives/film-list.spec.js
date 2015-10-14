'use strict()';

describe('Testing Directive: filmList', function () {

  beforeEach(module('FilmApp'));
  beforeEach(module('templates'));

  var element, scope;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();

    element = angular.element('<film-list></film-list>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should render on the page', function(){
    expect(element.html()).toContain('div');
  })
});
