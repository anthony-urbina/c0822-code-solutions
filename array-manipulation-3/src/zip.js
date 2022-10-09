/* exported zip */
/*
two arrays
pair the values of the two arrays at the corresponding indexes
send to main container

create a storage container
create a sub storage container
loop through the first array
for as long as the first array and second array are equal
push the value from the first array to the sub container
followed by the corresponding value of the second
then push the sub container to the main container
make sure to loop until there are no more pairs
finally, return the container
*/

function zip(first, second) {
  var container = [];
  var sub = [];

  for (var i = 0; i < first.length; i++) {
    if (i < second.length) {
      sub.push(first[i]);
      sub.push(second[i]);
      container.push(sub);
      sub = [];
    }
  }
  return container;
}
