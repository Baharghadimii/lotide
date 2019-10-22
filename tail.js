const tail = function(array) {
  let tem = [];
  for (let i = 1; i < array.length; i++) {
    tem.push(array[i]);
  }
  return tem;
};
module.exports = tail;

