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
*/

function isAnagram(firstString, secondString) {
  var storage = '';
  var newSecondString = secondString.replace(/ /g, '');
  var newFirstString = firstString.replace(/ /g, '');

  for (var i = 0; i < newFirstString.length; i++) {
    for (var j = 0; j < newSecondString.length; j++) {
      if (newFirstString[i] === newSecondString[j]) {
        storage = storage.concat(newFirstString[i]);
        newSecondString[i].replace('');
        break;
      }
    }
  }
  if (storage === newFirstString) {
    return true;
  } else { return false; }
}
