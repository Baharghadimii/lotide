const eqObjects = function(obj1, obj2) {
  const index = require('./index');
  if (obj1.length === obj2.length) {
    for (let key in obj1) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (obj1[key].length === obj2[key].length) {
          return index.eqArray(obj1[key], obj2[key]);

        } else {
          return false;
        }
      } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        return eqObjects(obj1[key], obj2[key]);

      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
module.exports = eqObjects;
