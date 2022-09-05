/* exported swapChars */
/*
create a function that returns a string with the characters at firstIndex and secondIndex swapped
create a storage container
iterate through all characters
if a character in the string's index is equal to firstIndex
then set the character equal to secondIndex
and push it to the container
if a character in the string index is equal to secondIndex
then set the character equal to firstIndex
and push it to the container
once there are no new characters to iterate through,
return the value of the container
*/

function swapChars(firstIndex, secondIndex, string) {
  var container = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      container += string[secondIndex];
      continue;
    } else if (i === secondIndex) {
      container += string[firstIndex];
      continue;
    } else {
      container += string[i];
    }
  }
  return container;
}
