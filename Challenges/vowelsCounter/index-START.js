/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

//iterative approaches

//for loop
function vowelsCounter(text) {
    let count = 0
    let lowerCaseText = text.toLowerCase()
    for (let i = 0; i < text.length; i++) {
        if (lowerCaseText[i] === 'a'
         || lowerCaseText[i] === 'e'
         || lowerCaseText[i] === 'i'
         || lowerCaseText[i] === 'o'
         || lowerCaseText[i] === 'u') {
            count++
        }
    }
    return count
}

//for of
const vowels = ['a', 'e', 'i', 'o', 'u']

function vowelsCounter(text) {
    let count = 0
    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++
        }
    }
    return count
}

//for of iterating over vowels variable and comparing to text
//BELOW SOLUTION DOESN'T WORK
//you cannot run the loop the other way around as it won't account
//for duplication of vowels in the text string whereas the above loop will (this function uses the const vowels variable above)

function vowelsCounter(text) {
    let count = 0
    for (let vowel of vowels) {
        if (text.toLowerCase().includes(vowel)) {
            count++
        }
    }
    return count
}

console.log(vowelsCounter('kriston')) //2
console.log(vowelsCounter('AIMEE')) //expected 4, returns 3 because double E

module.exports = vowelsCounter;

//speed test results
//scotch.io course lists regex solution as fastest/most optimized
//jsbench.me finds same results
