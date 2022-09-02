/* exported capitalize */

/**
create a function that capitalizes the first letter of a string, keeping all other letters lowercase
summon the string
iterate through the string to find the letter at it's first index
if you find the first index
edit it's value
then stop
and return the capitalized word
*/

function capitalize(word) {
  var cool = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      cool = cool.concat(word[0].toUpperCase());
    } else if (i > 0 && i < word.length) {
      cool = cool.concat(word[i].toLowerCase());
    }
  }
  return cool;
}
