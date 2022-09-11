/* exported pick */
/*
create a function that takes in any object as a parameter and returns the property and its value for the keys specified in the parameter
create a storage container
first you want to make sure the object has the values youre looking for
if it does, enter the object
start from 0 and look through it,
when you find a property that matches key,
push the property and it's value to the storage container
do this until you are finished scanning the last item in the array
finally, return the value of the container

v2
go through each item in keys until you reach the end of the array
each time  you pass through, check to see if the properties of object match the strings in keys
if they match, send that key to the storage container
repeat this until you reach the end of the array
return the value of the container
*/

function pick(object, keys) {
  var container = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in object) {
      if (object[keys[i]] !== undefined) {
        if (key === keys[i]) {
          container[key] = object[key];
        }
      }
    }
  }
  return container;
}
