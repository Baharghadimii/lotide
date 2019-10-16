/* eslint-disable camelcase */
const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDC36 Assertion Failed: ${actual} !== ${expected}`);
  }

};
//function that takes in an object and a value//

const findKeyByValue = function (object, value) {

  let myKey;
  for (let val in object) {
    if (object[val] === value) {
      myKey = val;
    }
  }
  if (!myKey) {
    myKey = undefined;
  }
  return myKey;

};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);