/* global module, describe, beforeEach, inject, it, expect */

'use strict()';

describe('Testing Filters', function () {

  var formatDate;

  beforeEach(module('MyApp'));

  beforeEach(inject(function ($filter) {
    formatDate = $filter('formatDate');
  }));

  it('should confirm formatDate is defined', function () {
    expect(formatDate).toBeDefined();
  });

  it('should confirm format of a date', function () {
    expect(formatDate(new Date(2014, 6, 1))).toEqual('July 1, 2014');
  });

});
