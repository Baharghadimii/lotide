
const assertEqual = function (actual, expected) {

  if (actual === expected) {
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

const eqObjects = function (obj1, obj2) {
  let codition;
  for (let key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      codition = eqArrays(obj1[key], obj2[key]);
    } else {
      if (obj1[key] === obj2[key]) {
        codition = true;
      } else {
        codition = false;
      }
    }
  }
  return codition;
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
