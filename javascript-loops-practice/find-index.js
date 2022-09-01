/* exported findIndex */

/*
create a function that searches for a specific value in an array
search within the array, value by value,
if you find a value that matches the content and data type of the specified value,
then it's index should be located and returned
stop after the first index is returned
if nothing was found, return -1
*/

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
