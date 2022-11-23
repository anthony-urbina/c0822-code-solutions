/* eslint-disable no-undef */
/* exported includes */

function includes(list, value) {
  let current = list;
  const newList = new LinkedList(value);
  while (current) {
    if (current.data === newList.data) {
      return true;
    }
    current = current.next;
  }
  return false;
}
