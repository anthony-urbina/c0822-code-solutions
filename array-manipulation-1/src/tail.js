/* exported tail */
/*
create a function that puts all contents of an array, besides the last, in a new container
create a storage container
access the array
find the first item
skip over it
starting from the second item, go throug each itmem in the array
send each item to the new container until there are no items left
make sure all items (minus the first) are in their new container
return that container
*/

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
