const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length) {

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;

};

const eqObjects = function (obj1, obj2) {
  if (obj1.length === obj2.length) {
    for (let key in obj1) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        return eqArrays(obj1[key], obj2[key]);
      } else {
        if (obj1[key] !== obj2[key]) {
          return false;
        }

      }
    } return true;
  } else {
    return false;
  }
};


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\uD83D\uDC36 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: 2, b: 1 }, { b: 1, a: 2 });