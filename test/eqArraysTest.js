const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1,2],[1,2]), true);
assertEqual(eqArrays([1,2],[1,3]), false);
assertEqual(eqArrays(["hello" , "world"],["hello" , "world"]), true);
assertEqual(eqArrays(["hello" , "world"],["hello"]), false);
