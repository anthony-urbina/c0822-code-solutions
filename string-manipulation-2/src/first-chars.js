/* exported firstChars */
/*
create a function that returns the first x amount of characters in a string
create a storage container
go through each letter of the string
add them to the new container, up until the x'th character
return the value of the new container
*/

function firstChars(length, string) {
  var container = '';
  for (var i = 0; i < length && i < string.length; i++) {
    container += string[i];
  }
  return container;
}
