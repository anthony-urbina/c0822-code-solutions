/* exported numVowels */
/*
create a function that returns the number of vowel characters in a string
create a storage container
set all characters in the string to lowercase
if the string is empty, return 0
if not,
iterate through every letter in the string
if you reach a letter that is equal to a, e, i, o, u
add 1 to the value that is already in the storage container
do this until there are no more characters to go through

 */

function numVowels(string) {
  var container = null;
  string = string.toLowerCase();
  if (string === '') {
    return 0;
  } else {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
        container += 1;
      }
    }
    return container;
  }
}
