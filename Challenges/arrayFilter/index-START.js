/*
Return the first element from the given array that passes the test specified by the provided function. Both the array and function are passed into the function as arguments as shown below:

arrayFilter(arr, func)
*/

//an imperative solution where we do a detailed specification of how we arrive at the result
//with a for of loop

function arrayFilter(arr, func) {
    for (let elem of arr) {
      if (func(elem)) {
        return elem
      }//returns first element then exits
    }
    return undefined
}

//using .filter()

function arrayFilter(arr, func) {
    let filteredArray = arr.filter(func);
    return filteredArray[0] ? filteredArray[0] : undefined;
}

//using .find()
//find() returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned

function arrayFilter(arr, func) {
    return arr.find(func)
}


//Practical applications
//This challenge finds its application in data manipulation, sorting, and conditional rendering of data within applications.

//module.exports = arrayFilter