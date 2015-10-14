'use strict()';

describe('Testing Directive: film', function () {

  beforeEach(module('FilmApp'));
  beforeEach(module('templates'));

  var element, scope;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();

    element = angular.element('<film></film>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should render on the page', function(){
    expect(element.html()).toContain('div');
  })
});
