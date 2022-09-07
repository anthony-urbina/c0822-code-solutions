/* exported getKeys */
/*
create a function that returns an array containing the objects property keys
create a storage container
access each individual property key, one by one, and return it to the new container
return the value of the container
*/

function getKeys(object) {
  var keys = [];
  for (var property in object) {
    keys.push(property);
  }
  return keys;
}
