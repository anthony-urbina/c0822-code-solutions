/* exported isAnagram */
/*
remove spaces from the strings
check if the lengths of both strings are equal
if not then auto return false
else continue
turn both strings into arrays
loop through array 1
if array at index is found in array 2
remove it from array 2
else
return false
if array 2 is empty after the loop has ended
return true
*/

function isAnagram(firstString, secondString) {
  var newSecondString = secondString.replace(/ /g, '');
  var newFirstString = firstString.replace(/ /g, '');
  var arrFirst = newFirstString.split('');
  var arrSecond = newSecondString.split('');

  arrFirst = arrFirst.sort();
  arrSecond = arrSecond.sort();
  arrFirst = arrFirst.join('');
  arrSecond = arrSecond.join('');

  if (arrFirst === arrSecond) {
    return true;
  } else {
    return false;
  }
}
