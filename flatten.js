const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`\uD83D\uDC36 Assertion Failed: ${arr1} === ${arr2}`);
  }
};

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
const flatten = function (array) {
  const result = [];
  array.forEach(element => {

    if (typeof element === 'object') {
      for (let i = 0; i < element.length; i++) {
        result.push(element[i]);
      }
    } else {
      result.push(element);
    }

  });
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6 , [1]]]));