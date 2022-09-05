/* exported lastChars */
/*
create a function that returns the lasr x amount of characters in a string
create a storage container
starting from the last character, go through each letter of the string
add them to the new container, up until the x'th character
return the value of the new container
*/

function lastChars(length, string) {
  var container = '';
  for (var i = 0; i < length && i < string.length; i++) {
    if (length > string.length) {
      length = string.length;
      container += string[string.length - length + i];
      continue;
    }
    container += string[string.length - length + i];
  }
  return container;
}
