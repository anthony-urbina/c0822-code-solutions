/* exported initial */

/*
create a function that puts all contents of an array, besides the last, in a new container
create a storage container
access the array
find each item
send each item to the new array
stop when you reach the final word
make sure all items (minus the last) are in their new container
return that container
*/

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
