/* CHALLENGE
Translate the provided string to Pig Latin by following the rules below:

For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
"big" = "igbay"

For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
"glove" = "oveglay"

For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
"explain" = "explainway”
*/

//Imperative solution (shows the steps of how to solve)
function wordConceal(str) {
    // Convert string to lowercase
    str = str.toLowerCase()
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;
  
    if (vowels.includes(str[0])) {
      // If first letter is a vowel
      return str + "way";
    } else {
      // If the first letter isn't a vowel i.e is a consonant
      for (let char of str) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
          // Store the index at which the first vowel exists
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      // Compose final string
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
}

module.exports = wordConceal