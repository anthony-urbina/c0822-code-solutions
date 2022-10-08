/* exported unique */
/*
create a storage container
loop through the array
if the item of the array at index is not present in the container
push it to the container
else continue
*/

function unique(array) {
  var container = [];
  for (var i = 0; i < array.length; i++) {
    if (!container.includes(array[i])) {
      container.push(array[i]);
    }
  }
  return container;
}
