/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

//chained methods
function palindromeChecker(text) {
    let reversed = text.split('').reverse().join('')
    return text.toLowerCase() === reversed.toLowerCase()
}

//for loop
//speed test on jsbench.me returning this approach as fastest
//scotch.io does not agree, listing the half way approach as fastest
function palindromeChecker(text) {
    let reversed = ''
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i].toLowerCase()
    }
    return reversed === text.toLowerCase()
}

//using every to compare strings from opposite ends
//this works, but is not optimal for perfomance and duplicates 
//tasks in the context of a palindrome
function palindromeChecker(text) {
    let charArray = text.toLowerCase().split('')
    let result = charArray.every((letter, index) => letter === charArray[charArray.length - index - 1])
    return result
}

//optimizing the loop to stop half way as after half way
//in a palindrome, we're duplicating tasks
//this optimizes, but does not account for case and fails that test
function palindromeChecker(text) {
    for (let i = 0; i < text.length / 2; i++) {
        if (text[i] !== text[text.length - 1 - i]) {
            return false
        }
    }
    return true
}

//optimized loop accounting for case
//speed test on jsbench.me has this coming in second fastest
//scotch.io lists this approach as fastest
function palindromeChecker(text) {
    for (let i = 0; i < text.length / 2; i++) {
        if (text[i].toLowerCase() !== text[text.length - 1 - i].toLowerCase()) {
            return false
        }
    }
    return true
}

console.log(palindromeChecker('racecar'))
console.log(palindromeChecker('RacecAr'))

module.exports = palindromeChecker;

