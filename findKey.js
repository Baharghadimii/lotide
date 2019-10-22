const findKey = function(object, callback) {
  for (let obj in object) {
    if (callback(object[obj])) {
      return obj;
    }

  }
};
module.exports = findKey;