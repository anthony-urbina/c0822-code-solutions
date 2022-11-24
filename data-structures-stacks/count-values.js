/* exported countValues */
let counter = 0;

function countValues(stack) {
  counter = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    counter++;
  }
  return counter;
}
