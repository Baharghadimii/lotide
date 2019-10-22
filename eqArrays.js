const eqArrays = function (arr1, arr2) {
  const index = require('./index');
  let temp1 = index.flatten(arr1);
  let temp2 = index.flatten(arr2);

  if (temp1.length !== temp2.length)
    return false;
  for (let i = temp1.length; i--;) {
    if (temp1[i] !== temp2[i])
      return false;
  }
  return true;

};


module.exports = eqArrays;
