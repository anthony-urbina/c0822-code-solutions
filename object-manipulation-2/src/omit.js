/* exported omit */
/*
create a function that returns a new object composed of the properties held in the keys array that are not found in the properties of the source
create a storage container
go through each item in keys one by one until there are none left
you also want to go through the source objects properties simultaneously
to check to see if any items from the keys array are NOT equal to any properties from the source object
and if they aren't, then send them and their corresponding values to the storage container
finally, return the value of the container

v2
compare first property of source to all items in key
if first property of source is equal to any items from keys array
do nothing
else, add it to the storage container as long as it has been compared to all items in keys array
repeat until there are no more properties to eval
*/

function omit(object, keys) {
  var container = {};
  for (var key in object) {
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        break;
      }
    }
    if (i === keys.length) {
      container[key] = object[key];
    }
  }
  return container;
}
