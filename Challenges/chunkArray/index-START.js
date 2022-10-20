/* 
 Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. 
 
 E.g. chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
 should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
*/

//return an array of sub-arrays, on sub-array for every 5 elements

//For of loop
function chunkArray(bigArray, chunkSize) {
    let result = []
    for (el of bigArray) {
        let lastArray = result[result.length - 1]
        if (!lastArray || lastArray.length == chunkSize) {
            result.push([el])
        }else {
            lastArray.push(el)
        }
    }
    return result
}

//Looping through the number of chunks
//.splice()
//.splice takes the starting index, and the number of elements to be extracted and returned
//.splice is used to modify the content of an array by removing or replacing elements
//here, we'll remove elements
//.splice returns the removed elements
//.splice manipulates an array in place, so we'll make a copy so our operations don't affect the data received
function chunkArray(bigArray, chunkSize) {
    let result = []
    let arrCopy = [...bigArray]
    while (arrCopy.length > 0) {
        result.push(arrCopy.splice(0, chunkSize))
    }
    return result
}

//For loop with .slice()
//.slice returns a shallow copy of a portion of an array
//takes a starting index, an ending index (not inclusive)
//we'll increment our iterator by the specified chunkSize on each iteration in order to start each new group from where the previous one ended 

function chunkArray(bigArray, chunkSize) {
    let result = [] 
    for (let i = 0; i < bigArray.length; i += chunkSize) {
        let chunk = bigArray.slice(i, i + chunkSize)
        result.push(chunk)
    }
    return result
}

//Recursion with .slice()
function chunkArray(bigArray, chunkSize) {
    //terminating condition so we get balance of big array back at end when it's less than or equal to our desired chunkSize
    if (bigArray.length <= chunkSize) {
        return [bigArray] 
    }
    //we use .slice() to extract portions of the array as chunks as well as reduce the size of the original array continuously until the terminating condition is met
    return [bigArray.slice(0, chunkSize), ...chunkArray(bigArray.slice(chunkSize), chunkSize)]
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5))
// [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

module.exports = chunkArray