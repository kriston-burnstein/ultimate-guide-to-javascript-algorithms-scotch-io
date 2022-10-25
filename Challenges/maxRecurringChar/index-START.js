/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

//Character map, for of loop, for in loop
function maxRecurringChar(text) {
    let charMap = {} //to store character map we're creating
    let maxCharValue = 0 //to store max value yet encountered as we loop for-in through
    let maxChar = '' //to store the char with the highest value on every iteration
    //generate a character map
    //loop through each char of text
    for (let char of text) {
        //for every char check to see if it has been mapped already,
        //is a property of the charMap object, using hasOwnPropterty() method
        if (charMap.hasOwnProperty(char)) {
            //if true, add 1 to that property
            charMap[char]++
        }else {
            //if false, set it to 1
            //so really, false is going to be the first hit on the chars
            //once it's no longer false, it will be 1, and then every time
            //we see that letter again, we'll add 1 to it above from the if statement
            charMap[char] = 1
        }
    }
    //iterate over the newly created object keys
    //if the value of the key is greater than max, that value is now the max
    //and also that character is now the character with the max
    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}

maxRecurringChar('aabacada') // will return 'a'

//forming arrays from the character map
function maxRecurringChar(text) {
    let charMap = {}
    let charArray =[]
    let valuesArray = []
    let maxCharValue = 0

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    charArray = Object.keys(charMap)        //['a', 'b', 'c', 'd']
    valuesArray = Object.values(charMap)    //[4, 3, 2, 1]
    maxCharValue = Math.max(...valuesArray) //4
    
    return charArray[valuesArray.indexOf(maxCharValue)]
    //reduces to charArray[valuesArray.indexOf('4')], 
    //reduces to charArray[0], 
    //reduces to 'a'
}

module.exports = maxRecurringChar;

//testing results
//testing result according to scotch.io lists for-in iteration (as opposed to forming arrays approach) as fastest by 30%
//jsbench.me first listed both as approx the same
//however second test listed forming arrays as faster .12%

//practical application
//can be used at a more advanced level in SEO for determining the keyword density in a piece of content
