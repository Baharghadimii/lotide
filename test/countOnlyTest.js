const assert = require('chai').assert;
const index = require('../index');

describe('countOnly', () => {
  it('should return an object with the counts of passed in elements in the given array', () => {
    assert.deepEqual(index.countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ], {
      "Jason": true,
      "Karima": true,
      "Fang": true
    })
    , { "Jason": 1, "Fang": 2 });
    assert.deepEqual(index.countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ], {
      "Jason": false,
      "Karima": true,
      "Fang": true
    })
    , { "Fang": 2 });
  });
  
});