/*
start the user off on letter g
if they type letter g
set letter g to green
and
move to the user to letter r
if they dont type the letter g
set the letter g to red
*/
var div = document.querySelector('.word-box');
var $h1 = document.createElement('h1');
div.appendChild($h1);

document.addEventListener('keypress', handlePress);
var str = 'grumpy wizards make toxic brew';

for (var i = 0; i < str.length; i++) {
  var span = document.createElement('span');
  span.className = 'black';
  span.textContent = str[i];
  $h1.appendChild(span);
}
var $allSpans = document.querySelectorAll('span');
var count = 0;
$allSpans[0].className = 'black underline';
function handlePress(event) {
  if (event.key === str[count]) {
    $allSpans[count].className = 'black green';
    if (count < str.length - 1) {
      $allSpans[count + 1].className = 'black underline';
    }
  } else {
    $allSpans[count].className = 'black red';
    return;
  }
  count++;
}
