/* exported includes */
/*
create a function that returns a boolean indicating the presence at an index of an array
iterate through the entire loop
if you reach a point where the i index is equal to the value in the parameter
return true
or else just keep iterating through the function till there are no numbers left
returning false after the final iteration
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
