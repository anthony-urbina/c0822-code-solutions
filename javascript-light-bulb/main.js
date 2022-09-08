/*
get access to the elements with the class button-moon
get access to the elements with the class button-sun
get access to the elements with the class container-moon
get access to the elements with the class container-sun
create a variable that counts the amount of clicks on the button
*/

var $button = document.querySelector('.button-moon');
var $container = document.querySelector('.container-moon');

$button.addEventListener('click', flickSwitch);
var on = false;

function flickSwitch(event) {

  if (on === false) {
    $container.className = 'button container-sun';
    $button.className = 'button button-sun';
    on = true;
    return on;
  } else if (on === true) {
    $container.className = 'button container-moon';
    $button.className = 'button button-moon';
    on = false;
    return on;
  }
}
