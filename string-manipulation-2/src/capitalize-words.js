/* exported capitalizeWords */
/**
 create a function that returns a string with every word
 create a storage container for final string
 create a storage container for split array
 locate the string
 capitalize the first letter of the string and add it to the container
 proceed by splitting the string into multiple strings at any point where there is a space
 locate the new string
 capitalize the first letter of the string and push it to the container
 then, go through each letter and individually make it lowercase

 /*
 create a function that returns a string with every word capitalized
 create a storage container
 set all letters in the string to lowercase
 set the first letter in the string to uppercase, add it to the container
 starting from the second letter, go through each letter, adding them to the container
 when you come across a space, add it to the container
 then capitalize the letter that comes after it, add it to the container
 do this until you reach the last letter
 then return the value of the final container
 */

function capitalizeWords(word) {
  var container = '';
  word = word.toLowerCase();
  container += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    if (word[i - 1] === ' ') {
      container += word[i].toUpperCase();
      continue;
    } else {
      container += word[i];
    }
  }
  return container;
}
