/* exported isLowerCased */
/*
create a function that returns a boolean indicating whether or not the words in a string are lowercase
go through each letter in the string
if you find a letter that is not equal to the lowercase version of itself
stop and return false
if nothing is found, at the end - return true
*/

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
