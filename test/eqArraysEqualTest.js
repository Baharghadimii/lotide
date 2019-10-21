const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,4],[1,2,3]);
assertArraysEqual([1,2],[1,2]);
assertArraysEqual(["hello" , "world"],["hello" , "world"]);
assertArraysEqual(["hello" , "world"],["hello"]);