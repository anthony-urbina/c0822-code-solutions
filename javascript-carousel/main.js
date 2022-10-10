var $prevIcon = document.querySelector('.prevIcon');
var $nextIcon = document.querySelector('.nextIcon');
var $pokemonNodeList = document.querySelectorAll('.pokemon');
var $blankCircleIconNodeList = document.querySelectorAll('.blank-circle-icon');
var $circleIconBox = document.querySelector('.circle-icon-box');

var currentIndex = null;

function showIndex(newIndex) {
  for (var i = 0; i < $blankCircleIconNodeList.length; i++) {
    if (i !== newIndex) {
      $blankCircleIconNodeList[i].className = 'fa-regular fa-circle';
      $pokemonNodeList[i].className = 'hidden pokemon';
    } else {
      $pokemonNodeList[i].className = 'current pokemon';
      $blankCircleIconNodeList[i].className = 'fa-solid fa-circle';
      currentIndex = i;
    }
  }
}

function showNextIndex() {
  var newIndex = null;
  if (currentIndex === 4) {
    newIndex = 0;
  } else {
    newIndex = currentIndex += 1;
  }
  showIndex(newIndex);
  clearInterval(returnIntervalID);
  returnIntervalID = setInterval(showNextIndex, 1000);
}

function showPreviousIndex() {
  var newIndex = null;
  if (currentIndex === 0) {
    newIndex = 4;
  } else {
    newIndex = currentIndex -= 1;
  }
  showIndex(newIndex);
  clearInterval(returnIntervalID);
  returnIntervalID = setInterval(showNextIndex, 1000);
}

function matchDotIndex(event) {
  if (event.target.matches('.fa-circle')) {
    var newIndex = parseInt(event.target.dataset.viewId);
    showIndex(newIndex);
  }
  clearInterval(returnIntervalID);
  returnIntervalID = setInterval(showNextIndex, 1000);
}

$prevIcon.addEventListener('click', showPreviousIndex);
$nextIcon.addEventListener('click', showNextIndex);
$circleIconBox.addEventListener('click', matchDotIndex);

var returnIntervalID = setInterval(showNextIndex, 1000);
