/* exported takeValueAtIndex */
function takeValueAtIndex(queue, index) {
  if (typeof queue.peek() !== 'undefined') {
    let i = 0;
    while (i < index) {
      const removed = queue.dequeue();
      queue.enqueue(removed);
      i++;
    }
  }
  return queue.dequeue();
}
