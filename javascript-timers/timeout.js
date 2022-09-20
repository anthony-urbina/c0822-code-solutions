var $h1 = document.querySelector('.message');

setTimeout(changeText, 2000);

function changeText() {
  $h1.textContent = 'Hello there';
}
