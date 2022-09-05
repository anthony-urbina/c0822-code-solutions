/* exported ransomCase */
/*
create a function that returns a string with every other leetter uppercased
create a storage container
set all characters to lowercase
iterate through each item in the string
if the remainder of the position of character in the string divided by 2 is equal to 0
make it lowerase and add it to the container
if the remainder of the position of the char in the string divided by is equal to a number greater than 0
make it uppercase and add it to the container
once there are no more characters to iterate through
return the value of the storage containers
*/

function ransomCase(string) {
  var container = '';
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      container += string[i].toLowerCase();
    } else if (i % 2 > 0) {
      container += string[i].toUpperCase();
    }
  }
  return container;
}
