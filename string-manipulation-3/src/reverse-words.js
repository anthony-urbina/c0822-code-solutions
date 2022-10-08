/* exported reverseWords */
/*
when there's a space
segment the first word behind it
flip it
add a space to it
send it to the main container
but when you reach the last letter in the string
flip it
then send it to the main container
*/

function reverseWords(string) {
  var container = '';
  var flipped = '';
  var tracker = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      var newStr = string.slice(tracker, i);
      for (var j = 0; j < newStr.length; j++) {
        flipped += newStr[newStr.length - j - 1];
      }
      tracker = i + 1;
      container += flipped + ' ';
      flipped = '';
    } else if (i === string.length - 1) {
      newStr = string.slice(tracker, i + 1);
      for (j = 0; j < newStr.length; j++) {
        flipped += newStr[newStr.length - j - 1];
      }
      container += flipped;
      flipped = '';
    }
  }
  return container;
}
