/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let current = list;
  const newList = new LinkedList(value);
  while (current) {
    if (current.next === null) {
      current.next = newList;
      break;
    }
    current = current.next;
  }
}
