const tail = require('../tail');
const assert = require('chai').assert;

describe('Tail', function() {
  it('should return the tail of an array of integers', function() {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it('should return the tail of an array of strings', function() {
    assert.deepEqual(tail(["hello" , "world" , "again"]), ["world" , "again"]);
  });
});
