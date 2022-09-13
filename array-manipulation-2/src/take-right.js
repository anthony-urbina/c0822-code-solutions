/* exported takeRight */
/*
create a function that returns a new array containing the last x amount of elements in an array
create a storage container
if the count is higher than items in the string, return the og string
iterate through each item that falls within x indexes of the final index, starting from the lowest index
iterate until you reach the final index
push each item to the new storage container as you iterate
when all indexed have been searched, return the value of the container
*/

function takeRight(array, count) {
  if (count > array.length) {
    return array;
  }
  var container = [];
  for (var i = 0; i < count; i++) {
    container.push(array[array.length - count + i]);
  }
  return container;
}
