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
//.splice manipulates an array in place, so we'll make a copy so our operations don't affect the data received
function chunkArray(bigArray, chunkSize) {
    let result = []
    let arrCopy = [...bigArray]
    while (arrCopy.length > 0) {
        result.push(arrCopy.splice(0, chunkSize))
    }
    return result
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5))
// [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

module.exports = chunkArray