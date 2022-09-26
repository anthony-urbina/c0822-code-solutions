/* exported reverseWords */
/*
create a container
iterate through the string
any time you reach a space remove the characters before it including the space and assign them to a variable
then you iterate through all the characters in that string starting from second to last
send each to yet a NEW variable
then you add a space to it
and push it to the storage container
but if you reach reach the last char in the string
you must add everything in the string to a variable

create a container
iterate through the string
when you reach a space i want to pause
then i want to iterate through all of the chars before the space
and starting from the last char before the space,
i want to begin sending each char to the container
then when there are no more chars to send i want to send a space to the container

but if i reach the last char in the string,
starting from the last char, i want to retroactively add characters to the container until i reach a space.

when done, return the value of the container
*/

function reverseWords(string) {
  var container = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      for (var j = 0; j <= i; j++) {
        if (j === container.length) {
          container = container.concat(' ');
          break;
        }
        if (string[j] === ' ') {
          break;
        }
        container = container.concat(string[i - j - 1]);
      }
    } else if (i === string.length - 1) {
      for (var k = 0; k < string.length; k++) {
        if (string[string.length - 1 - k] !== ' ') {
          container = container.concat(string[string.length - 1 - k]);
        }
      }
    }
  }
  return container;
}
