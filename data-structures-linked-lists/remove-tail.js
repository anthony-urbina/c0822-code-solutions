/* exported removeTail */

function removeTail(list) {
  let current = list;
  if (current.next === null) {
    return;
  }
  while (current) {
    if (current.next.next === null) {
      current.next = null;
      return;
    }
    current = current.next;
  }
}
