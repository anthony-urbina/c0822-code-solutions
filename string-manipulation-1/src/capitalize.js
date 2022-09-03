/* exported capitalize */

/**
create a function that capitalizes the first letter of a string, keeping all other letters lowercase
create a storage container
iterate through the string to find the letter at it's first index
once you find the value at first index, capitalize it
push that letter to the storage container
next, go though ALL the other letters that aren't at the first index and set them to lowercase
push all of those letters to the storage container
and return the word in its new form
*/

function capitalize(word) {
  var upper = '';
  upper += (word[0].toUpperCase());
  for (var i = 1; i < word.length; i++) {
    upper += (word[i].toLowerCase());
  }
  return upper;
}
