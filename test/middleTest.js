const assert = require('chai').assert;
const middle = require('../middle');

describe('Middle', function() {
  it('should return the middle number of an odd array', function() {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 5, 6]), [3]);
    assert.deepEqual(middle(["hello" , "world" , "again"]), ["world"]);


  });
  it('should return two middle numbers in even arrays', function() {
    assert.deepEqual(middle([1, 2, 2, 3]) , [2,2]);
    assert.deepEqual(middle(["hello" , "world" , "lighthouse" , "bootcamp"]) , ['world' , "lighthouse"]);

  });
});

