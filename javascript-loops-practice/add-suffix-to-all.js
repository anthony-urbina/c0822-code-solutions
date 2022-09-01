/* exported addSuffixToAll */

/*
add a sufix to all words in an array and a suffix to add
have a function that takes an array as its paramater
create a storage container
attatch a suffix to the back of an existing word
then push that to a new storage container
do that once for every word provided, from thr first word to the last
return the value of the storage container
*/

function addSuffixToAll(words, suffix) {
  var newWords = [];
  for (var i = 0; i < words.length; i++) {
    newWords.push(words[i] + suffix);
  }
  return newWords;
}
