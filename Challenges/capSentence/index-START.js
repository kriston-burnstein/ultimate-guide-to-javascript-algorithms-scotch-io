/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

//my initial thoughts with method chaining
//split, map, slice, join / toUpperCase
function capSentence(sentence) {
  return sentence
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')  
}

//using forEach and initializing variables
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = []
  wordsArray.forEach(word => {
    capsArray.push(word[0].toUpperCase() + word.slice(1))
  })
  return capsArray.join(' ')
}

//using map initiating variables to hold results
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = wordsArray.map(word => word[0].toUpperCase() + word.slice(1))
  return capsArray.join(' ')
}

//using map and replace
//the 'pattern or function' that replace takes can be a simple bracket notation lookup/target 
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = wordsArray.map(word => {
    return word.replace(word[0], word[0].toUpperCase())
  })
  return capsArray.join(' ')
}

console.log(capSentence('the tales of scotch!')) // would return 'The Tales Of Scotch!' 

module.exports = capSentence

//speed test results
//scotch.io lists .map and .slice as fastest (this was my first choice)
//with forEach next, and .map and .replace as much slower
//varying results with jsbench.me but showed .replace as faster in 2 separate tests
