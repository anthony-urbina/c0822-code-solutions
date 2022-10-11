/* exported isPalindromic */
/*
create a storage container
send all letters to that storage container
make sure you don't send any spaces
BUT you should start from the last letter
do this until there are no more letters to go through
once you've finished convert both strings to lowercase
then check to see if they are equal
return the boolean
*/

function isPalindromic(string) {
  var storage = '';
  var str = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      str = str.concat(string[i]);
    }
  }
  for (var j = 0; j < str.length; j++) {

    storage = storage.concat(str[str.length - 1 - j]);

  }

  if (str.toLowerCase() === storage.toLowerCase()) { return true; } else { return false; }
}
