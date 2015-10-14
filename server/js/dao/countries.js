/* global exports,require */

var countries = require('./countries.json');

exports.getCountries = function (req, res) {


  res.status(200).json(countries);
};