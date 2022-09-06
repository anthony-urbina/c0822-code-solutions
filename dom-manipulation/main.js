/*
add a click event listener to hotButton that increments the counter variable
*/
var clickCount = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function update(num) {
  $clickCount.textContent = 'Clicks: ' + clickCount++;
  if (clickCount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickCount < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (clickCount > 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', update);
