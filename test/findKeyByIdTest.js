const index = require('../index');
const assert = require('chai').assert;

describe('findKeyByValue', function() {
  it('should return the key in an object by given value', function() {
    assert.deepEqual(index.findKeyByValue({
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    }, "The Wire"), "drama");
    assert.deepEqual(index.findKeyByValue({
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    }, "something"), undefined);
  });
});