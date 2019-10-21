const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(eqArrays(middle([1,2,3]), middle([1,2,2,2,3])), true);
assertArraysEqual(eqArrays(middle([1,2,3]), middle([1,2,2,2,3])), false);
assertArraysEqual(eqArrays(middle([1,2,2,3]), middle([1,2,2,3])), true);
assertArraysEqual(eqArrays(middle([1,2,3]), middle([1,2,2,2,3])), true);