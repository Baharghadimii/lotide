const letterPositions = function(sentence) {
  const results = {};
  const string = sentence.split('').join('');
  for (const item in string) {
    if (results[string[item]]) {
      results[string[item]].push(Number(item));
    } else {
      if (results[string[item]] !== ' ') {
        results[string[item]] = [Number(item)];
      }

    }
  }
  return results;
};
module.exports = letterPositions;


