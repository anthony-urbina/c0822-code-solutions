/* exported countdown */

/*
you have a number 3 and want to countdown until 0
you would create a storage container
you would add 3 to the storage container
you would do 3-1, log that
you would do 2-1, log that
1-1, log that and stop at zero
and put all values in a storage container
*/

function countdown(number) {
  var numbers = [];

  for (var i = 0; i <= number; i++) {
    numbers.push(number - i);
  }
  return numbers;
}
