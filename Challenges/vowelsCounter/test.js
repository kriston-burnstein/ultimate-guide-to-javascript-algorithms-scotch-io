const vowelsCounter = require('./index-START');

test('vowelsCounter is a function', () => {
  expect(typeof vowelsCounter).toEqual('function');
});

test('returns the number of vowels found', () => {
  expect(vowelsCounter('aeiou')).toEqual(5);
});

test('returns the number of vowels found when string is capitalized', () => {
  expect(vowelsCounter('AEIOU')).toEqual(5);
});

test('returns the number of vowels found when all alphabets are passed in', () => {
  expect(vowelsCounter('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels found when string has mixed capitalization', () => {
  expect(vowelsCounter('Abcdegfizzjbhso')).toEqual(4);
});

//wrote an addition test in the event the text string has more than one occassion of any vowel as I inadvertently wrote a function that doesn't not work and it still passed all tests

test('returns the number of vowels found when a string with multiple occurences of the same vowel', () => {
  expect(vowelsCounter('vooweelsmapa')).toEqual(6)
})
