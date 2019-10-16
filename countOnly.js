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
  //check if the item in array exists in itemToCount object and is true
  for (const item in allItems) {
    for (let key in itemToCount) {
      if (key === allItems[item]) {
        if (itemToCount[key] === true) {
          //if there's more than this key we need to increment the previous value of this key;
          if (obj.hasOwnProperty(key)) {
            obj[key]++;
          } else {
            obj[key] = 1;
          }
        }
      }
    }
  }
  console.log(obj);

  return obj;
};
// a function that takes an array and object
// return an object //
//the object must have the values of the properties that exist //
//in the array and are true in the output object //
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