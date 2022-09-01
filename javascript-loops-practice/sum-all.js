/* exported sumAll */

/*
create function that adds all numbers in an array together
go through each index
add the first number to the second number
then add the third number to the result of ^
do this until there are no more indexes to check
return all of the values added together (the container value)
*/

function sumAll(number) {
  var swag = 0;
  for (var i = 0; i < number.length; i++) {
    swag = swag + number[i];
  }
  return swag;
}
