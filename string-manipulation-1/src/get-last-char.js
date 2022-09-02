/* exported getLastChar */
/*
create a function that returns the last char in a string
since the last index of a string is always one less than length,
locate the string at string length - 1
*/
function getLastChar(string) {
  return string[string.length - 1];
}
