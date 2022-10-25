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

//Full solution with Array.from() method to convert the set, which is an iterable object, to an array as shown below:
function mergeArrays(...arrays) {  //rest
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]  //spread
    });
    return Array.from(new Set([...jointArray]))
}

//Full solution with .filter() method
//Used to create a new array from another array. 
//The new array contains only elements that satisfy the specified condition. It accepts one main parameter i.e the function specifying the testing condition

//We use the .filter() method to loop through the jointArray while testing to see if the index of the current item matches the index of the current iteration.

//indexOf() method is used to get the FIRST index at which a given element can be found in an array. It returns -1 if the element isn't present.

function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)
    return uniqueArray
}

//Full solution with .reduce(), which accepts two parameters, the function to be executed and the initial value of the accumulator.

//Using .reduce() to continuously execute a function that checks if the current item is already in the accumulator array (newArray), which we initialized to an empty array at the beginning of the iteration, using an empty array [] as the second parameter.

//If the element is within the array already, we return the array as it is, to be used in the next iteration. If it isn’t, we return a new array which we create from the elements in the accumulator(newArray) and the current item. This new array is used as the accumulator in the next iteration.

//At the end of the reduction process we are left with an array that contains all elements of the merged arrays without duplicates. We store this in uniqueArray which we return at the end.

function mergeArrays(...arrays) {  //rest, of all the arrays
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]  //spread all the arrays into new jointArray
    })
    const uniqueArray = jointArray.reduce((newArray, item) =>{
        if (newArray.includes(item)){
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])
    return uniqueArray
}

module.exports = mergeArrays

//Speed Test Results
//According to scotch.io, tests reveal that .filter() method is the fastest approach of all three. Next is using a set.

//Practical Applications
//Solid understanding of these concepts and techniques will improve how we handle duplicate data in real world applications. We can use these techniques in cleaning up large data-set for statistical computations and visual representation.