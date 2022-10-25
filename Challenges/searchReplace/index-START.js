/* CHALLENGE
Receiving a sentence, a word in the sentence, and a replacement for that word as arguments, perform a search and replce on the sentence using the arguments provided and return the new sentence. Word cases much match.

ex: searchReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')
=> should return 'He is Sitting on the couch'
*/

//replace
function searchReplace(sentence, word, newWord) {
    if (word[0] === word[0].toUpperCase()) {
        newWord = newWord[0].toUpperCase() + newWord.slice(1)
    }
    return sentence.replace(word, newWord)
}

//regex
function searchReplace(str, word, newWord) {
    let regex = new RegExp(word, "gi");
    if (/[A-Z]/.test(word[0])) {
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }
    return str.replace(regex, newWord)
}

/* Note: **g** and **i** as specified in the second argument are regular expression flags with the following meanings. | g | - Global search(look in the whole string and return all matches). | i | - Case-insensitive search. */

console.log(searchReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'))
//=> should return 'He is Sitting on the couch'

//speed test results
//scotch.io test results indicate that replace is faster and deems regex less efficient

