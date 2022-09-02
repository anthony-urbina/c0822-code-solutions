/* exported reverse */
/*
create a function that reverses the order of items within an array and returns it
create a storage container
go through each item in the array one by one, starting from the end of the array
send each item to the new array until there are none left
then return the value of the container
 but if the string is empty, return an empty string
*/

function reverse(array) {
  var revArray = [];
  for (var i = 1; i <= array.length; i++) {
    revArray = revArray.concat(array[array.length - i]);
  }
  return revArray;
}
