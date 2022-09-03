/* exported toObject */
/*
create a function that creates and returns an object from the two string elements in an array
set the first item in the array equal to the property of the object
then set the second item in the array equal to the property of the object at key
return that object
*/

function toObject(keyValuePair) {
  var obj = {};
  var key = keyValuePair[0];
  obj[key] = keyValuePair[1];
  return obj;
}
