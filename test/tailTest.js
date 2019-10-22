const index = require('../index');
const assert = require('chai').assert;

describe('Tail', function() {
  it('should return the tail of an array of integers', function() {
    assert.deepEqual(index.tail([1, 2, 3]), [2, 3]);
  });
  it('should return the tail of an array of strings', function() {
    assert.deepEqual(index.tail(["hello" , "world" , "again"]), ["world" , "again"]);
  });
});
