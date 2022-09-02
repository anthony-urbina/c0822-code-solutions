/* exported isVowel */
/*
create a function that returns a boolean indicating whether or not a string contains a vowel
scan the letters one by one
if any letter is equal to 'a, e, i, or, u' capitalized or lowercase, then return true
at then end, if there are no vowels, return false
 */

function isVowel(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u' ||
      word[i] === 'A' || word[i] === 'E' || word[i] === 'I' || word[i] === 'O' || word[i] === 'U') {
      return true;
    }
  }
  return false;
}
