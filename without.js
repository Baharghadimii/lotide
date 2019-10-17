const assertArraysEqual = function (arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`\uD83D\uDC36 Assertion Failed: ${arr1} !== ${arr2}`);
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

const without = function (arr1, arr2) {
  let filtered = [];

  for (let i = 0; i < arr1.length; i++) {
    let repeatedItem = 0;
    for (let j = 0; j < arr2.length; j++) {

      if (arr1[i] === arr2[j]) {
        repeatedItem++;


      }
    }

    if (!repeatedItem >= 1) {

      filtered.push(arr1[i]);
      repeatedItem = 0;

    }

  }

  console.log(filtered);
};

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);