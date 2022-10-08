/* exported isAnagram */
/*
create a storage container
i want to figure out how many times a letter appears in a word
i should go through the first word, and if that letter has not appeared before i would likes to send it to the storage container and say that it appeared once
if i continue traversing the word and run into it again
then i update the storage container to say that it appeated twice
do this until you run out of letters to check
then make a second storage container and repeat the process for the second word

now to compare the storage containers i will compare the first letter's appearance count to the same letter's appearance count in the second container
create a ledger that keeps track of truth/false
if the counts are equal && both words have the same amount of letters then set the leger variable equal to true
or else set it to false
after a letter is evaluated check the value of the ledger
if its true do nothing,
if it's false return false
if youre able to traverse the entire word successfully then return true
*/

function isAnagram(firstString, secondString) {
  var container = {};
  var container2 = {};
  var newSecondString = secondString.replace(/ /g, '');
  var newFirstString = firstString.replace(/ /g, '');

  for (var i = 0; i < newFirstString.length; i++) {
    if (i === 0 || container[newFirstString[i]] === undefined) {
      container[newFirstString[i]] = 1;
    } else if (container[newFirstString[i]] !== null) {
      container[newFirstString[i]]++;
    }

    if (i === 0 || container2[newSecondString[i]] === undefined) {
      container2[newSecondString[i]] = 1;
    } else if (container2[newSecondString[i]] !== null) {
      container2[newSecondString[i]]++;
    }
  }
  var isEqual = null;
  for (var key in container) {
    if (container[key] === container2[key] && newSecondString.length === newFirstString.length) {
      isEqual = true;
    } else {
      isEqual = false;
    }
    if (isEqual === false) {
      return false;
    }
  }
  return true;
}
