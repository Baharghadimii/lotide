const without = function(arr1, arr2) {
  let filtered = [];

  for (let i = 0; i < arr1.length; i++) {
    let repeatedItem = 0;
    for (let j = 0; j < arr2.length; j++) {

      if (arr1[i] === arr2[j]) {
        repeatedItem++;


      }
    }

    if (!repeatedItem >= 1) {

      filtered.push(arr1[i]);
      repeatedItem = 0;

    }

  }

  return filtered;
};
module.exports = without;