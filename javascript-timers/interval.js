var $h1 = document.querySelector('.countdown-display');

var returnIntervalID = setInterval(countdown, 1000);
function countdown() {
  if (parseInt($h1.textContent) === 1) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(returnIntervalID);
  } else if (parseInt($h1.textContent) > 0) {
    $h1.textContent = parseInt($h1.textContent) - 1;
  }
}
