/* exported oddOrEven */

/*
create a function that determines whether or not the values of an array are odd or even
then push those to new array
create storage container
iterate through each index of the array
if the number has 0 remainder when you divide by two, return even to the array
but if there is a remainder when you divide by two, return odd to the array
do this until there are no indexes left to check
*/

function oddOrEven(numbers) {
  var newNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push('even');
    } else {
      newNumbers.push('odd');
    }
  }
  return newNumbers;
}
