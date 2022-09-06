/* exported chunk */
/*
create a function that seperates items in an array by the length parameter and returns them as sub arrays in a new array
create a container
iterate through each item in the array
if the array is empty
return an empty array
if its not, continue going through each item in the array one by one
create a sub container
add each item to the sub container until you reach the character specified in length
close entries for that sub array then push it to the main container
then add whatever is left to a new sub container
once there are no more values to iterate through,
push the sub array to the main container

split the array at the item that is equal to size
send it to a sub array, then send it to the main array

create a function that returns a new array that contains an array. the sub arrays will have lengths equal to size, any remaining elements will be sent to sub arrays
all sub arrays will be sent to the new array
create a storage container
create 2 sub containers
iterate through the array of array starting from the first character
up until you reach where i = size - 1
*/

// function chunk(array, size) {
//   var mainContainer = [];
//   var subC = [];
//   for (var i = 0; i < array.length; i++) {
//     if (i < size & i === size) {
//       subC.push(array[i]);
//     }
//   }
//   return subC;
// }
