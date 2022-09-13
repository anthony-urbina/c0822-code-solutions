/* exported invert */
/*
create a function that returns a new object containing all properties of source. but with the values inverted
look into the object
access its property values one by one
set each prop value to be the key for the new container
then set the prop itself as the value
do this until there are no more properties to scan
return the value of the container
*/

function invert(source) {
  var container = {};
  for (var key in source) {
    container[source[key]] = key;
  }
  return container;
}
