/* exported getLength */

function getLength(list) {
  let current = list;
  let count = 0;
  while (current) {
    current = current.next;
    count++;
  }
  return count;
}
