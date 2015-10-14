/* global module, jasmine, describe, beforeEach, inject, it, expect */

'use strict()';

describe('Testing Controller: AppCtrl', function () {

  var httpBackend, AppCtrl;

  // Load the app module
  beforeEach(module('MyApp'));

  // The injected $httpBackend is from the angular-mocks.js module
  // see http://docs.angularjs.org/api/ngMock.$httpBackend
  beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
    var scope = $rootScope.$new();
    httpBackend = $httpBackend;

    // Intercept any calls to this URL and return this mock data.
    httpBackend.expect('GET', 'data/animals.json').respond(
      '{' +
      '	"animals" : [' +
      '		{' +
      '			"id" : "testid1",' +
      '			"name" : "Ducks for testing"' +
      '		},' +
      '		{' +
      '			"id" : "testid2",' +
      '			"name" : "Flamingos for free"' +
      '		}' +
      '	]' +
      '}'
    );

    // Instantiating the Controller makes the HTTP call (see AppCtrl)
    // Instead of making the real HTTP call, the call is intercepted by the httpBackend.expect() above,
    // and returns the mock data: animals[].
    AppCtrl = $controller('AppCtrl', {
      $scope: scope
      // place mocked dependencies here
    });
  }));

  it('should test controller is defined', function () {
    expect(AppCtrl).toBeDefined();
  });

  it('should confirm controller properties', function () {
    expect(AppCtrl.text).toBeDefined();
    expect(AppCtrl.now).toBeDefined();
    expect(AppCtrl.animals).toBeDefined();
    expect(AppCtrl.animal).toBeDefined();
  });

  it('should test http call using mock data', function () {
    // Flushing allows HTTP requests to happen synchronously, greatly simplifying unit testing!
    httpBackend.flush(); // Explicitly call the synchronous HTTP call

    expect(AppCtrl.animals.length).toBe(2);
    expect(AppCtrl.animals[0].name).toBe('Ducks for testing');
    expect(AppCtrl.animals[1].id).toBe('testid2');
  });
});
