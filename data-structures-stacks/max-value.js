/* exported maxValue */

function maxValue(stack) {
  let positive = 0;
  let negative = -Infinity;
  while (stack.peek() !== undefined) {
    const removed = stack.pop();
    if (removed > 0) {
      if (removed > positive) {
        positive = removed;
      }
    }
    if (removed < 0) {
      if (removed > negative) {
        negative = removed;
      }
    }
  }
  if (positive) {
    return positive;
  } else {
    return negative;
  }
}
