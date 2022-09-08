var $taskListUL = document.querySelector('.task-list');

$taskListUL.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target && event.target.tagName === 'BUTTON') {
    var $closest = event.target.closest('.task-list-item');
    console.log($closest);
    $closest.remove();
  }
}
