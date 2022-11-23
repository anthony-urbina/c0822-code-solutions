/* exported take2nd */

function take2nd(queue) {
  if (typeof queue.peek() !== 'undefined') {
    const removed = queue.dequeue();
    queue.enqueue(removed);
    return queue.dequeue();
  }
}
