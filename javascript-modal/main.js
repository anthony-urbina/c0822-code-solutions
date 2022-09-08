/*
when open model is clicked it should call a function
that function should summon the modal
and it should make the dim background appear
when the no button is clicked it should disperse with the modal
as well as the dim background
make sure to block the page from reloading
*/

var $openButton = document.querySelector('.button-open');
var $noButton = document.querySelector('.button-no');

$openButton.addEventListener('click', handleOpenClick);

function handleOpenClick(event) {
  var $modalBox = document.querySelector('.modal-box');
  var $overlay = document.querySelector('.overlay');
  $modalBox.className = 'modal-box modal-box-active';
  $overlay.className = 'overlay overlay-active';
}

$noButton.addEventListener('click', handleCloseClick);
function handleCloseClick(event) {
  var $modalBox = document.querySelector('.modal-box');
  var $overlay = document.querySelector('.overlay');
  $modalBox.className = 'modal-box';
  $overlay.className = 'overlay';
}
