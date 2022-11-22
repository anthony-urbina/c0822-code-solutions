/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const removed = stack.pop();
  const last = stack.peek();
  stack.push(removed);
  return last;
}
