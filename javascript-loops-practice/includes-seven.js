/* exported includesSeven */

/*
create a functions that scans all indexes of an array and returns a boolean true/false dependent on if  the function finds a 7
search through every value in the array by searching every index one at a time
if any value matches 7 then immediatley return true
if the entire array is searched return nothing
*/

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
