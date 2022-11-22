/* exported countValues */

function countValues(stack) {
  const gutter = [];
  while (stack.peek()) {
    const removed = stack.pop();
    gutter.push(removed);
  }
  return gutter.length;
}
