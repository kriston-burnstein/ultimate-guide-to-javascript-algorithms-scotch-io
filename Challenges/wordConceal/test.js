const wordConceal = require('./index-START')

test('wordConceal is a function', () => {
  expect(typeof wordConceal).toEqual('function')
})

test('when word starts with one consonant', () => {
  expect(wordConceal('big') ).toEqual('igbay');
})

test('when word starts with two consonants', () => {
  expect(wordConceal('glove') ).toEqual('oveglay');
})

test('when word starts with vowel', () => {
  expect(wordConceal('explain') ).toEqual('explainway');
})

console.log(wordConceal("big")) // = "igbay"
console.log(wordConceal("glove")) // = "oveglay"
console.log(wordConceal("explain")) // = "explainway”