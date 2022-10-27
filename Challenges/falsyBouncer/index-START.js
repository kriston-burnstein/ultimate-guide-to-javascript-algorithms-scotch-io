/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]

Of note: Examples of falsy values are: false, null, undefined, 0, NaN, and "".
*/

// //Using for of loop
// function falsyBouncer(array) {
//     let filteredArray = []
//     for (let value of array) {
//         if (value) {
//             filteredArray.push(value)
//         }
//     }
//     return filteredArray
// }

//Using .filter()
function falsyBouncer(array) {
    return array.filter(el => Boolean(el))
}

console.log(falsyBouncer([1, 0, null, '', 5])) // should return [1,5]

module.exports = falsyBouncer

// Performance Test Results
// According to scotch.io fo of loop is the faster approach to solving this problem. However, filter() method is only slightly slower.

// Practical Applications
// These solutions may enable us clean up our data-set for computation and visual representation in real world applications.