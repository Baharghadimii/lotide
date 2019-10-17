/* eslint-disable no-prototype-builtins */
const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDC36 Assertion Failed: ${actual} !== ${expected}`);
  }

};
const countOnly = function (allItems, itemToCount) {
  let obj = {};
  for (const item in allItems) {
    for (let key in itemToCount) {
      if (key === allItems[item]) {
        if (itemToCount[key] === true) {
          if (obj[key]) {
            obj[key]++;
          } else {
            obj[key] = 1;
          }
        }
      }
    }
  }
  return obj;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);