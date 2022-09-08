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

function flickSwitch(event) {
  if ($container.className !== 'button container-sun') {
    $container.className = 'button container-sun';
    $button.className = 'button button-sun';
  } else if ($container.className === 'button container-sun') {
    $container.className = 'button container-moon';
    $button.className = 'button button-moon';
  }
}
