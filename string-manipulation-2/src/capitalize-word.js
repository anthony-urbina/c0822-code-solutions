/* exported capitalizeWord */
/*
created a function that returns a word with it's first letter capitalized and the rest lowercase, but JavaScript should always be JavaScript
create a container for storage
turn every letter into uppercase
then check if the word is equal to uppercase javascript
if it is, then send J to the container, and make every letter lowercase up until you hit S
send S to the container
then capitalize every letter after it
at last, return the value of the container
if not, then take the words first letter, capitalize it, and send it to the storage container
then proceed to change the rest of the word into lowercase, starting from the second letter, to the storage container
at last, return the value of the storage container from the function
*/

function capitalizeWord(word) {
  var container = '';
  word = word.toUpperCase();
  if (word.toUpperCase() === 'JAVASCRIPT') {
    return 'JavaScript';
  } else {
    container += word[0].toUpperCase();
    for (var i = 1; i < word.length; i++) {
      container += word[i].toLowerCase();
    }
  }
  return container;
}
