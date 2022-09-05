/* exported truncate */
/*
create a function that returns a shortened version of a string plus elipses
create a container
iterate through each character in the string up to the value of the length paramater
adding each letter once per iteration
once finished, add elipses
then return the value of the container
*/

function truncate(length, string) {
  var container = '';
  for (var i = 0; i < length && i < string.length; i++) {
    container += string[i];
  }
  container += '...';
  return container;
}
