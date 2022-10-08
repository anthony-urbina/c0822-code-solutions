/* exported flatten */
/*
create a storage container
if array is an empty array return []

loop through the array
if the array at index is an array
loop through the inner array
and push values to the container
else just push the value to the container
make sure to check all indexes
finally, return value of the container
*/

function flatten(array) {
  var container = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        container.push(array[i][j]);
      }
    } else {
      container.push(array[i]);
    }
  }
  return container;
}
