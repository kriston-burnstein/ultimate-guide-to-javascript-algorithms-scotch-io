/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

//Using sort() and indexOf()

function whereIBelong(arr, num) {
   arr.push(num)
   return arr.sort((a, b) => a - b).indexOf(num)
}

//Using for loop
//The logic here is that when the array is sorted in ascending order, we can determine what position the specified value should be injected into, by determining the value that’d be immediately after it in terms of size

// We start by using the .sort() method to arrange the array values in ascending order. Next, use a for-loop to iterate through the sorted array while comparing each value with the specified number num. If the value is greater than num, we return the value of the iterator i, which is also the index at which the first larger value was found.

// In a situation where none of the values are larger, it means that the specified value will come at the end. So we return the length of the array which is also the index of the next position to be filled.

function whereIBelong(arr, num) {
   arr.sort((a,b) => a - b)
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
         return i
      }
   }
   return arr.length
}

//While loop
//Sort and use a while loop to iterate through the array while incrementing the counter each time the specified number num is greater than the current value arr[counter].
//At the end, we return counter which holds the number of smaller values i.e the position at which the number is to be inserted.
function whereIBelong(arr, num) {
   arr.sort((a, b) => {
       return a - b
   })
   let counter = 0;
   while (num > arr[counter]) {
       counter++
   }
   return counter
}

console.log(whereIBelong([1,2,3,4], 1.5)) // should return 1 (index)

module.exports = whereIBelong