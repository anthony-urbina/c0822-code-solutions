/* exported take */
/*
create afunction that returns a new aray containing the first x elements of an array
create a storage container
iterate through each item in the array until you reach the x'th element and only if the array contains more than 0 items
push each item you iterate through to the storage container
once finished return the value of the container
*/

function take(array, count) {
  var container = [];
  for (var i = 0; i < count && array.length > 0; i++) {
    container.push(array[i]);
  }
  return container;
}
