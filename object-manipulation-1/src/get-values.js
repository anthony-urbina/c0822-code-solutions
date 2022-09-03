/* exported getValues */
/*
create a function that pushes an objects property values to a new array and returns it
create a storage container
summon the object
iterate through each property and extract it's value (to the new container), one by one until there are no more values
return the value of the new container
*/

function getValues(object) {
  var propValues = [];
  for (var key in object) {
    propValues.push(object[key]);
  }
  return propValues;
}
