/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/


//chaining methods, using sort
//left out replace in regex so spaces and weird characters not accounted for
//optimize this to replace spaces and weird characters/symbols with nothing
function isAnagram(stringA, stringB) {
    if (stringA.length === stringB.length) {
    return stringA.toLowerCase().split('').sort().join() === stringB.toLowerCase().split('').sort().join('')
    }else {
        return false
    }
}

//regex solution with replace
//accounts for spaces and weird characters, replaces with nothing
function isAnagram(stringA, stringB) {
    const sanitizeString = function (str) {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    }
    return sanitizeString(stringA) == sanitizeString(stringB)
}

//create a function to facilitate the sort solution above
//left out length and regex

function isAnagram(stringA, stringB) {
    const sanitizeString = function (str) {
        return str.toLowerCase().split('').sort().join('')
    }
    return sanitizeString(stringA) === sanitizeString(stringB)
}

//IF I were going to create a new string method as opposed to a function (which is not necessarily the way to go), but if I did:

String.prototype.sanitizeString = function () {
    return this.toLowerCase().split('').sort().join('')
}
//and effect like this:
//return stringA.sanitizeString() === stringB.sanitizeString()

//character map comparison
//we first create the createCharMap function, then code the comparison

function isAnagram(stringA, stringB) {
    //create the createCharMap function first
    function createCharMap(text) {
        let charMap = {}
        for (let char of text) {
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++
            }else {
                charMap[char] = 1
            }
        }
        return charMap
    }
    //now create the 2 charMaps and compare
    if (stringA.length === stringB.length) {
        let stringMapA = createCharMap(stringA)
        let stringMapB = createCharMap(stringB)
        for (let char in stringMapA) {
            if (stringMapA[char] !== stringMapB[char]) {
                return false
            }
        }
        return true
    }else {
        return false
    }
}
console.log(isAnagram('silent', 'listen')) // should return true

//speed test results
//scotch.io speed test indicates charMap solution is significantly slower

//practical applications
//this algorithms has numerous practical applications including encryption, password generation, trusted time-stamping, generating mnemonics, and word games

module.exports = isAnagram