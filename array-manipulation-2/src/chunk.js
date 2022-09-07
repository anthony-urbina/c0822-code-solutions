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

Where modulus = 0
I want to send array[i] to the sub array, push that to the main array, then wipe it
So I can continue the process up until i is equal to todos.length
Once this is finished I want to make sure the sub array is empty
Return the value of the container

Where modulus != 0
Then you want to iterate, sending each index to the sub array up until i is equal to count
Then you push the sub array to the main array then wipe it
Then you continue
Let the statement iterate, pushing each leftover value into the sub array Up until i is equal to todos.length
Then push the sub container to the main container and empty the sub container
Return the value of the container

*/

function chunk(array, size) {
  var container = [];
  var miniContainer = [];
  for (var i = 0; i < array.length; i++) {
    if (array.length % size === 0) {
      if (i < size) {
        miniContainer.push(array[i]);
        if (miniContainer.length === size) {
          container.push(miniContainer);
          miniContainer = [];
        }
      } else if (i >= size && i < array.length) {
        miniContainer.push(array[i]);
        if (miniContainer.length === size) {
          container.push(miniContainer);
          miniContainer = [];
        }
      }
    } else if (size % array.length !== 0) {
      if (i < size) {
        miniContainer.push(array[i]);
        if (miniContainer.length === size) {
          container.push(miniContainer);
          miniContainer = [];
        }
      } else if (i >= size && i < array.length) {
        miniContainer.push(array[i]);
        if (miniContainer.length === array.length - size || miniContainer.length === size || miniContainer.length === array.length - i) {
          container.push(miniContainer);
          miniContainer = [];

        }
      }
    }
  }
  return container;
}
