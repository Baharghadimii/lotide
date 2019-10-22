const countOnly = function(allItems, itemToCount) {
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

module.exports = countOnly;
