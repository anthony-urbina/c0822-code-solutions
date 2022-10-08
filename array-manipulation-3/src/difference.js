/* exported difference */

/*
create a container
loop through the first array
if the item at that index is not found in the second array
push it to the container
once all items have been checked
loop through the second array
if the item at that index is not found in the first array
push it to the container
return value of the container
*/

function difference(first, second) {
  var container = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      container.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      container.push(second[j]);
    }
  }
  return container;
}
