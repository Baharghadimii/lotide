const head = require('../head');
const assert = require('chai').assert;

describe('Head', function() {
  it('should return first element in an array', function() {
    assert.strictEqual(head([1, 2, 3]), 1);
    assert.strictEqual(head([1]), 1);
    assert.strictEqual(head([2, 2, 3]), 2);
  });
});


