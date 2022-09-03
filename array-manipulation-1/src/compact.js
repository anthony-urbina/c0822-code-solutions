/* exported compact */
/*
create a function that removes any empty string, undefined, negative integer, -0, null or NaN from an array and returns it(the og array)
go through each index of the array
if a value is not equal to empty string, undefined, negative integer, -0, null or NaN
push it to the new array
once all indexes have been searched
return the new array
 */

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== undefined && array[i] !== '' && Math.sign(array[i]) !== -1 && Number.isNaN(array[i]) === false && array[i] !== null && array[i] !== false && array[i] !== 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
