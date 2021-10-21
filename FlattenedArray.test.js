

// JEST TEST FOR FLATTENEDARRAY.JS FILE

const flattened = require('./FlattenedArray');

test('Array', () => {
  expect(flattened([['a'],['bc'],[['cde'], ['f']]])).toStrictEqual(['a','bc','cde','f']);
});


test('Array', () => {
  expect(flattened([[['a'],['bcd']],[['dcde'], ['fg']]])).toStrictEqual(['a','bcd','dcde','fg']);
});
