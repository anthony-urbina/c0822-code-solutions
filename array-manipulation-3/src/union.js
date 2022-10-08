/* exported union */
/*
create a container
loop through the first array
push all values to the container
loop through the second array
if value at that index is not present in container then
push it to the container
return the value of the container
*/

function union(first, second) {
  var container = [];
  for (var i = 0; i < first.length; i++) {
    container.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (!container.includes(second[j])) {
      container.push(second[j]);
    }
  }
  return container;
}
