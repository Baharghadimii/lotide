const takeUntil = function (array, callback) {
  const temp = [];
  for (const item in array) {
    if (!callback(array[item])) {
      temp.push(array[item]);
    } else {
      return temp;
    }
  }
};
module.exports = takeUntil;
