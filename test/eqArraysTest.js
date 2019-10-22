const assert = require("chai").assert;
const index = require("../index");

describe('EqualArrays', function() {
  it('should return true if two flat arrays are the same', function() {
    assert.deepEqual(index.eqArrays(["hello" , "world"],["hello" , "world"]), true);
    assert.deepEqual(index.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('should return true if two nested arrays are the same', function() {
    assert.deepEqual(index.eqArrays([1, [2, [3]], 3], [1, [2, [3]], 3]), true);
  });
});
it('should return false if two arrays are not the same', function() {
  assert.deepEqual(index.eqArrays([1, 2, 4], [1, 2, 3]), false);
});

