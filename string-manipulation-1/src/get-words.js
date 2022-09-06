/* exported getWords */
/*
create a function that send the all words entered into the parameter of the function, to an array, with their own index
seperate any part of the string that has a space in between it, and log that to the console
i know there's a method for this so im going to search for it
string.split, found it.. takes a pattern and divides a string into an ordered list of substrings by searching for the pattern
set the pattern to space, then make sure that value gets returned from the function
** before this you need to make sure the string is not empty
 or else the split function will return an array w an empty stting instead of just an empty array
 if empty, return an empty array, if not check to see if words contains the pattern
*/

function getWords(words) {
  if (words === '') {
    return [];
  }
  return words.split(' ');
}
