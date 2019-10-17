const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  const string = sentence.split('').join('');
  for (const item in string) {
    if (results[string[item]]) {
      results[string[item]].push(Number(item));
    } else {
      if (results[string[item]] !== " ") {
        results[string[item]] = [Number(item)];
      }

    }
  }
  console.log(results);
  return results;
};
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDC36 Assertion Failed: ${actual} !== ${expected}`);
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
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").h, [4]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("hello").l, [1]);
