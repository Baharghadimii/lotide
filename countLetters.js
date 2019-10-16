/* eslint-disable no-prototype-builtins */
const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDC36 Assertion Failed: ${actual} !== ${expected}`);
  }

};
const countOnly = function (stringToCount) {
  const string = stringToCount.replace(/ /g, '').split('');
  let obj = {};
  for (const item in string) {
    if (obj[string[item]]) {
      obj[string[item]]++;
    } else {
      obj[string[item]] = 1;
    }
  }
  console.log(obj);
};
countOnly('hello world!');
countOnly('lighthouse in the house');


