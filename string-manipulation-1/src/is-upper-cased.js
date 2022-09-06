/* exported isUpperCased */
/*
create a function that returns a boolean indicating whether or not the words in a string are uppercase
go through each letter in the string
if you find a letter that is not equal to the uppercase version of itself
stop and return false
if nothing is found, at the end - return true
*/

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
