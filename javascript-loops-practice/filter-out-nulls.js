/* exported filterOutNulls */

/*
create a function that filters out null values from an array
create a container for storage
go though each value
is this value equal to null?
if not, then push it to the storage container
if it is, do nothing
rinse and repeat until you reach the final value
return value of the new array
*/

function filterOutNulls(values) {
  var nulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] != null) {
      nulls.push(values[i]);
    }
  }
  return nulls;
}
