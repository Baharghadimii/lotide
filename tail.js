const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDC36 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function (array) {
  return array[0];

};
const tail = function (array) {
  let tem = [];
  for (let i = 1; i < array.length; i++) {
    tem.push(array[i]);
  }
  console.log(tem);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
