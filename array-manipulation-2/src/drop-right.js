/* exported dropRight */
/*
create a function that returns a new array containing elements of an array before the x count
create a storage container
iterate through each item in the array (as long as the count is greater than the length of the array)
start from the beginning up until you reach the x count from the last element in the array
add each item to the container
when done, return the value of the container
*/

function dropRight(array, count) {
  var container = [];
  for (var i = 0; i <= array.length - 1 - count; i++) {
    container.push(array[i]);
  }
  return container;
}
