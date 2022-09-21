/*
path 1:
the carousel automatically begins steppping to the next image every three seconds then resets when it hits the last image

path 2a:
 - the user clicks a next icon to switch the image
    give each slide a dataviewid# so you can iterate through them
    if the next button is clicked
    you want to apply hidden to all slides whos data-view-id are not equal to the value of data-view-id + 1
    resume countown timer
    do this until value of dataviewid# is equal to 5
    if the value ever equals 5 you want to begin the process again starting from data-view-id = 1

- the user clicks a previous icon to switch the image
    each slide has a data-view-id
    if the previous button is clicked
    then i want you to hide everything that is not the slide whos data-view-id is equal to the current data-view-id - 1
    do this until the value of data-view-id = 1
    if data-view-id = 1 then you should restart this entire cycle
path 2b:
 - the user clicks a progress dot to switch the image
    give each slide a dataviewid# so you can iterate through them
    give each progress dot a dataviewid# so you can match it to a corresponding slide
    if a progress dot is clicked
    you  will find the data-view-id value of that dot and seatch all of the slides for the one with a matching data-view-id value
    once you find it, you will make all slides besides that one hidden
    resumer countdown timer
*/

var $box = document.querySelector('.main');
var $prevIcon = document.querySelector('.prevIcon');
var $nextIcon = document.querySelector('.nextIcon');
var $pokemonNodeList = document.querySelectorAll('.pokemon');
var $blankCircleIconNodeList = document.querySelectorAll('.blank-circle-icon');

// clearInterval(returnIntervalID);
// setInterval(rotate, 1000);

$box.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target === $nextIcon) {
    var $currentPokemon = document.querySelector('.current.pokemon');
    for (var i = 0; i < $pokemonNodeList.length; i++) {
      if (parseInt($currentPokemon.dataset.viewId) === 5) {
        $pokemonNodeList[0].className = 'current pokemon';
        $pokemonNodeList[1].className = 'hidden pokemon';
        $pokemonNodeList[2].className = 'hidden pokemon';
        $pokemonNodeList[3].className = 'hidden pokemon';
        $pokemonNodeList[4].className = 'hidden pokemon';
        $blankCircleIconNodeList[0].className = 'fa-solid fa-circle';
        $blankCircleIconNodeList[4].className = 'fa-regular fa-circle';
      } else if (parseInt($pokemonNodeList[i].dataset.viewId) !== parseInt($currentPokemon.dataset.viewId) + 1) {
        $pokemonNodeList[i].className = 'hidden pokemon';
        $blankCircleIconNodeList[i].className = 'fa-regular fa-circle';
      } else {
        $pokemonNodeList[i].className = 'current pokemon';
        $blankCircleIconNodeList[i].className = 'fa-solid fa-circle';
      }
    }
  } else if (event.target === $prevIcon) {
    $currentPokemon = document.querySelector('.current.pokemon');
    for (var j = 0; j < $pokemonNodeList.length; j++) {
      if (parseInt($currentPokemon.dataset.viewId) === 1) {
        $pokemonNodeList[0].className = 'hidden pokemon';
        $pokemonNodeList[1].className = 'hidden pokemon';
        $pokemonNodeList[2].className = 'hidden pokemon';
        $pokemonNodeList[3].className = 'hidden pokemon';
        $pokemonNodeList[4].className = 'current pokemon';
        $blankCircleIconNodeList[4].className = 'fa-solid fa-circle';
        $blankCircleIconNodeList[0].className = 'fa-regular fa-circle';
      } else if (parseInt($pokemonNodeList[j].dataset.viewId) !== parseInt($currentPokemon.dataset.viewId) - 1) {
        $pokemonNodeList[j].className = 'hidden pokemon';
        $blankCircleIconNodeList[j].className = 'fa-regular fa-circle';
      } else {
        $pokemonNodeList[j].className = 'current pokemon';
        $blankCircleIconNodeList[j].className = 'fa-solid fa-circle';
      }
    }

  } else if (event.target.tagName === 'I') {
    $currentPokemon = document.querySelector('.current.pokemon');
    for (var k = 0; k < $blankCircleIconNodeList.length; k++) {
      if (parseInt(event.target.dataset.viewId) !== parseInt($pokemonNodeList[k].dataset.viewId)) {
        $pokemonNodeList[k].className = 'hidden pokemon';
        $blankCircleIconNodeList[k].className = 'fa-regular fa-circle';
      } else {
        $pokemonNodeList[k].className = 'current pokemon';
        $blankCircleIconNodeList[k].className = 'fa-solid fa-circle';
      }
    }
  }
  clearInterval(returnIntervalID);
  returnIntervalID = setInterval(rotateCallback, 1000);
}

var rotateCallback = function rotate() {
  var $currentPokemon = document.querySelector('.current.pokemon');
  for (var i = 0; i < $pokemonNodeList.length; i++) {
    if (parseInt($currentPokemon.dataset.viewId) === 5) {
      $pokemonNodeList[0].className = 'current pokemon';
      $pokemonNodeList[1].className = 'hidden pokemon';
      $pokemonNodeList[2].className = 'hidden pokemon';
      $pokemonNodeList[3].className = 'hidden pokemon';
      $pokemonNodeList[4].className = 'hidden pokemon';
      $blankCircleIconNodeList[0].className = 'fa-solid fa-circle';
      $blankCircleIconNodeList[4].className = 'fa-regular fa-circle';
    } else if (parseInt($pokemonNodeList[i].dataset.viewId) !== parseInt($currentPokemon.dataset.viewId) + 1) {
      $pokemonNodeList[i].className = 'hidden pokemon';
      $blankCircleIconNodeList[i].className = 'fa-regular fa-circle';
    } else {
      $pokemonNodeList[i].className = 'current pokemon';
      $blankCircleIconNodeList[i].className = 'fa-solid fa-circle';
    }
  }
};

var returnIntervalID = setInterval(rotateCallback, 1000);
/*
path 3:
 - the user does nothing
    the carousel should go to the next image
    it will take the current image and go to the one that is located + 1 away in relation to the current
    that one will be set to dislay
    evenything else will be hidden

*/
