/*
Given an integer, return an integer that has the reverse ordering of that which was received. E.g

reverseInteger(-123) // should return -321
Keep the following rules in mind:

The signs must not change i.e -123 becomes -321
The value returned must be an integer.
All insignificant zeroes must be removed i.e 900 becomes 9 and not 009
*/
 

// Pseudo code
// Convert the Integer to a string
// Create and array of characters from the string
// Reverse the array
// Join the reversed array to form a new string
// Convert the reversed string back into an integer
// Add the sign that corresponds with the received integer
// Return the result

//Using reduce() on a string to use later in our solution
// Reverses a string
function reverseString(text) {
  return [...text].reduce((acc, char) => char + acc, '')
}
//this reverses because we return the char before the acc
//and we initialize with an empty string, which concats the rest as a string

// Reverses an integer to solve this challenge
function reverseInteger(num) {
  let reversedNumber = parseInt(reverseString(num.toString()))
  //when we convert the reversed string above back to an integer, this gets rid of any negative sign at the end. In the next step we add the corresponding sign to the reversed integer.

  return (reversedNumber * Math.sign(num))
}
//The Math.sign() function returns 1 or -1, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.



//module.exports = integerReversal