/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

//for loop
//for loop solution syntax provided in course is no longer viable
//syntax is corrected below

function hammingDistance(stringA, stringB) {
    let result = 0
    if (stringA.length == stringB.length) {
        for (let i = 0; i < stringA.length; i++) {
            //compare two strings directly
            if (stringA[i].toLowerCase() !== stringB[i].toLowerCase()) {
                //add 1 to result for each letter that does not match
                result++
            }
        }
        return result
    }else {
        throw new Error('Strings do not have equal length')
    }
}
console.log(hammingDistance('river', 'rover')) //1

module.exports = hammingDistance

//practical application
/* The hamming distance algorithm finds its application in telecommunications for error detection and correction. It is used to determine the number of distored bits in a binary word as a way to estimate error. In the biological realm, it is also used to determine genetic distance. In software engineering, it could come in handy for developing word games.
*/