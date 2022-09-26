/* exported isAnagram */
/*
create a storage container
look through the first word
get the first letter, then compare it to every letter in the second word until you find a match
*dont loop thru entire second word loop through length of first word*
when you find a match, send it to the storage container
do this for each letter in the first word until there are no more
once done, compare the storage container to og string 1
if theyre equal then return true
if not return false

this doesnt work because it doesn't remove newSecondString[i] that matches newFirstString[i]
this cant happen, it throws the whole thing off
so how do i get rid of a character when it matches

if a word has x occurences of a letter
but that x occurences of that letter is not present in the other word
then it should return false

how would i check that string have the same ammount of a certain character
if first string at i is equal to any of the letters that were already pushed then it should skip

create a storage container
compare the first letter of string1 to every letter of string2
if its a match and not already in the container then push it to the container and move on to the next character in string 2
but if it does match a letter in the container you need to skip that character in the second string and keep searching the rest of it

but then wont the same thing happen when you reach the letter again

i can delete the letter
save it's index
then add it back after
*/

// function isAnagram(firstString, secondString) {
//   var storage = '';
//   var newSecondString = secondString.replace(/ /g, '');
//   var newFirstString = firstString.replace(/ /g, '');

//   for (var i = 0; i < newFirstString.length; i++) {
//     for (var j = 0; j <= newSecondString.length; j++) {
//       if (newFirstString[i] === newSecondString[j] && storage.includes(newFirstString[i])) {
//         storage = storage.concat(newFirstString[i]);
//         newSecondString[i].replace('');
//         break;
//       } else if (newFirstString[i] === newSecondString[j] && !storage.includes(newFirstString[i])) {
//         storage = storage.concat(newFirstString[i]);
//         newSecondString[i].replace('');
//         break;
//       }
//     }
//   }
//   if (storage === newFirstString) {
//     return true;
//   } else { return false; }
// }

function isAnagram(firstString, secondString) {
  var container = '';
  var newSecondString = secondString.replace(/ /g, '');
  var newFirstString = firstString.replace(/ /g, '');
  for (var i = 0; i < newFirstString.length; i++) {
    if (newFirstString.includes(newSecondString[i]) && newFirstString.length === newSecondString.length) {
      container = newFirstString;
    }
  }
  if (container === newFirstString) {
    return true;
  } else { return false; }
}
