/* exported drop */
/*
create a function that returns a new array containing the elements of an array after the first x elements as long as the array has content
create a container
iterate through each item of the array
starting from the first index of the array plus count
push each item to the new array
until you reach the final item in the array
then return the value of the storage container
*/

function drop(array, count) {
  var container = [];
  for (var i = 0; i < array.length - count && array.length > 0; i++) {
    container.push(array[count + i]);
  }
  return container;
}
