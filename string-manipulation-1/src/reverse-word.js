/* exported reverseWord */
/**
 create a function that returns a string of a word in reverse order
 create a storage container
 pull each letter of the string into the storage container but start from the end of the word
once finished, return the new string
 */

function reverseWord(word) {
  var newString = '';
  for (var i = 1; i <= word.length; i++) {
    newString += (word[word.length - i]);
  }
  return newString;
}
