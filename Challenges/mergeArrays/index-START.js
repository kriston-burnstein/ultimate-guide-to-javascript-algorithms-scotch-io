/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

//we need to write a function that accepts an infinite number of arguments
//to do that, we need to detect the number of arrays provided and extract them individually before merging them into one array without any element repeating itself

//We could design a function that accepts an infinite number of args like this:
// To convert the arguments object to a real array, we directly create an array from it using the Array.from() method.
// Array.from() method creates a new Array instance from an array-like or iterable object.

function mergeArrays() {
    let arrays = Array.from(arguments);
    console.log(arrays)
   // some more code here
}
// console.log(arrays) => [[1,2,3,3,3], [1,4,5,2]]

// ES6 however offers us a cleaner and more concise way to achieve the same result using the REST PARAMETER syntax which allows us to accept an infinite number of arguments as shown below:

// OF NOTE: The main difference between REST and SPREAD is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. But the spread syntax expands iterables into individual elements.

function mergeArrays(...arrays) {
    console.log(arrays)
   // some more code here
}

// Using the SPREAD syntax above, we are able to combine all the arguments passed (irrespective of the number) into one array which we name arrays. Our console.log of arrays in both cases above will give the array below when tested with the challenge sample.

// arrays = [[1,2,3,3,3], [1,4,5,2]]

// Here's how we'll combine the arrays received into one array (still containing duplicates). To do this, we use a forEach loop to iterate through each array and add the elements therein into another array which we call jointArray.

function mergeArrays(...arrays) {  //rest of all the arrays
    let jointArray = []
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array] //spread all into jointArray
    });
    //Some more code here
}

// Above, for each array, we use the spread operator to spread its elements as well as the elements in the jointArray, which is initially empty, into a new array. We then reassign this array to jointArray. On complete execution of this statement, jointArray now contains all the elements from all the arrays received(still with duplicates).

//Full solution with set()
// We use the spread operator to spread out all the elements of the jointArray into a new set. This eliminates all duplicates as sets are designed to only hold unique values.
// We then spread the unique elements of the set back into an array which we return as the final result. 

function mergeArrays(...arrays) {  //rest of all the arrays

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array] //spread all into jointArray
    });

    return [...new Set([...jointArray])]
}

module.exports = mergeArrays