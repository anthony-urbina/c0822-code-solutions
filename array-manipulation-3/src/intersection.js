/* exported intersection */

/*
create a container
loop through the first array
if the item at that index is found in the second array
push it to the container
return the value of the container
*/

function intersection(first, second) {
  var container = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      container.push(first[i]);
    }
  }
  return container;
}
