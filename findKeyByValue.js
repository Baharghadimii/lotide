const findKeyByValue = function(object, value) {

  let myKey;
  for (let val in object) {
    if (object[val] === value) {
      myKey = val;
    }
  }
  if (!myKey) {
    myKey = undefined;
  }
  return myKey;

};
module.exports = findKeyByValue;