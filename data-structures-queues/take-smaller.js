/* exported takeSmaller */

function takeSmaller(queue) {
  if (typeof queue.peek() !== 'undefined') {
    const first = queue.dequeue();
    if (typeof queue.peek() === 'undefined') {
      return first;
    }
    if (first > queue.peek()) {
      const second = queue.dequeue();
      queue.enqueue(first);
      return second;
    } else {
      const second = queue.dequeue();
      queue.enqueue(second);
      return first;
    }
  }
}
