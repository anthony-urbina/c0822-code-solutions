/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() !== 'undefined') {
    const removed = queue.dequeue();
    queue.enqueue(removed);
  }
}
