/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//methods chain
//split the string into an array, reverse it, join it back together as string
function reverseString(text) {
    return text.split('').reverse().join('')
}
  
//spread with methods chain
function reverseString(text) {
    return [...text].reverse().join('')
}

//for loop 
function reverseString(text) {
    let result = ''
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }
    return result
}

//for of loop - ES6
function reverseString(text) {
    let result = ''
    for (let char of text) {
    result = char + result //char has to be in front here to make this go in reverse
    }
    return result
}

//recursion
function reverseString(text) {
    if (text === '') {      //terminal case
        return ''
    }else {
        return reverseString(text.substr(1)) + text[0] 
        //returns index 1 to end + index zero (so now first let on end)
        //and calls reverseString on that and iterates until all the lets are put on the
        //end and string is reversed. stops when it ran out of letters ''
    }
}

//reduce
function reverseString(text) {
    return text.split('').reduce((acc, char) => char + acc, '')
    //add char to front of acc
}

//reduce with spread
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
    //add char to front of acc 
}

//speed test results
//speed test results listed in scotch.io list reduce as fastest
//with chaining methods as slowest
//results of jsbench.me had varying results but for most part,
//reduce with spread was fastest, for-of loop as second fastest in most runs


module.exports = reverseString