const eqArrays = function(arr1, arr2) {
  const index = require('./index');
  let temp1 = index.flatten(arr1);
  let temp2 = index.flatten(arr2);
  
  if (temp1.length === temp2.length) {
    temp1.forEach((element, index) => {
      if (element !== temp2[index]) {
        return false;
      }
    });

    return true;
  } else {
    return false;
  }

};

module.exports = eqArrays;
