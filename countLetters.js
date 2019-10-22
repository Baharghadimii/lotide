const countOnly = function(stringToCount) {
  const string = stringToCount.replace(/ /g, '').split('');
  let obj = {};
  for (const item in string) {
    if (obj[string[item]]) {
      obj[string[item]]++;
    } else {
      obj[string[item]] = 1;
    }
  }
  return obj;
};
module.exports = countOnly;


