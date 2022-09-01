/* exported getIndexes */

/*
create a function that extracts and returns indexes from the input array
create a storage container for the extracted array
get access to the array
go through each item one by one
keep count of how many values it has
bc it's number of values is equal to the index numbers if you start at 0
each time you go through a value, log its index
do this until there are no values left
return all of the indexes in an array
*/

function getIndexes(array) {
  var indexes = [];
  for (var i = 0; i < array.length; i++) {
    indexes.push(i);
  }
  return indexes;
}
