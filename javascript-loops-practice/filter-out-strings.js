/* exported filterOutStrings */

/*
create a function that filters out string values from an array
create a storage container for the non-string values
get access to the array values, go through them one by one until there are none left
if you find any data type that isn't a string,
it should be pulled from the array and pushed to the storage container
return the value of the storage container
*/

function filterOutStrings(values) {
  var newValues = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newValues.push(values[i]);
    }
  }
  return newValues;
}
