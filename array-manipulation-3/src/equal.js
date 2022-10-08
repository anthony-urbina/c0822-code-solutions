/* exported equal */
/* exported difference */
/*
first check if the arrays are the same size
if not then return false
else loop through the first array
compare the value at each index of the first array to the corresponding index of the second array
if any unequal values are detected then return false
else if you scan the entire array w no errors return true
*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  }
}
