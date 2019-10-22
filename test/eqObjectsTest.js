const index = require('../index');
const assert = require('chai').assert;

describe('eqObject', function() {
  it('should return true if two nested objects are equal', function() {
    assert.deepEqual(index.eqObjects({ c: { f: 1, e: { a: 4 } } },
      { c: { f: 1, e: { a: 4 } } }), true);
  });
  it('should return true if two objects are equal', function() {
    assert.deepEqual(index.eqObjects({ b: 2, a: 2 },
      { b: 2, a: 2 }), true);
  });
  it('should return false if two objects are not equal', function() {
    assert.deepEqual(index.eqObjects({ b: 1, a: 2 },
      { b: 2, a: 2 }), false);
  });
  it('should return false if two nested objects are not equal', function() {
    assert.deepEqual(index.eqObjects({ b: 2, a: 2 },
      { b: 2, a: 2 }), true);
  });
});