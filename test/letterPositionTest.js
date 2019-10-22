const index = require('../index');
const assert = require('chai').assert;

describe('LetterPositionTest', function() {
  it('should return an object with all the letters as key with value of their position as an array', function () {
    assert.deepEqual(index.letterPositions("hello"), {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4]
    });
    assert.deepEqual(index.letterPositions(""), {});
  });
});