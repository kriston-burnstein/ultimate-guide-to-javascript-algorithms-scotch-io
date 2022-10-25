/* CHALLENGE
Given a sentence, write an algorithm that return the longest word in the string. 
E.g longestWord('Top Shelf Web Development Training on Scotch') // should return 'Development'
*/

//chaining a million methods
function longestWord(text) {
    let textArr = text.split(' ')
    let lengthArr = textArr.map(el => el.length)
    let indexOfLongest = lengthArr.indexOf(Math.max(...lengthArr))
    return textArr[indexOfLongest]
}

//for loop
function longestWord(text) {
    let longestWord = ''
    let textArr = text.split(' ')
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i].length > longestWord.length) {
            longestWord = textArr[i]
        }
    }
    return longestWord
}

//sort
function longestWord(text) {
    let sorted = text.split(' ').sort((a,b) => a.length - b.length)
    return sorted[sorted.length - 1]
}

//reduce
function longestWord(text) {
    let result = text.split(' ').reduce((maxLengthWord, currentWord) => {
        if (currentWord.length > maxLengthWord.length) {
            return currentWord
        }else {
            return maxLengthWord
        }
    }, '')
    return result
}

console.log(longestWord('Top Shelf Web Development Training on Scotch'))

//speed test results
//jsbench.me consistently indicates sort is fastest
//however, scotch.io indicates that for-loop and reduce perform better with the sort method being the slowest

//practical application
//may be applied in evaluation the complexity of a piece of text, and may also be used in word games for scoring

module.exports = longestWord