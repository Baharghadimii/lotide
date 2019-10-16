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
const assertArraysEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: middles of ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDC36 Assertion Failed: middles of ${actual} !== ${expected}`);
  }
};

const middle = function (arr) {
  const middleItem = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      middleItem.push(arr[(arr.length / 2) - 1], arr[arr.length / 2]);

    } else {
      middleItem.push(arr[Math.floor(arr.length / 2)]);

    }
  }
  return middleItem;
};
assertArraysEqual(eqArrays(middle([1,2,3]), middle([1,2,2,2,3])), true);
assertArraysEqual(eqArrays(middle([1,2,3]), middle([1,2,2,2,3])), false);
assertArraysEqual(eqArrays(middle([1,2,2,3]), middle([1,2,2,3])), true);
assertArraysEqual(eqArrays(middle([1,2,3]), middle([1,2,2,2,3])), true);