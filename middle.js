const middle = function(arr) {
  const middleItem = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      middleItem.push(arr[(arr.length / 2) - 1], arr[arr.length / 2]);

    } else {
      middleItem.push(arr[Math.floor(arr.length / 2)]);

    }
  }
  return middleItem;
};

module.exports = middle;
