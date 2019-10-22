const index = require('../index');
const assert = require('chai').assert;

describe('Flatten', function() {
  it('should return a flatten array with nested array', function() {
    assert.deepEqual(index.flatten([1, 2, [3, 4, [5, [6]]]]), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(index.flatten([1, 2, 3, [4, 5], 6]), [1, 2, 3, 4, 5, 6]);

  });

});