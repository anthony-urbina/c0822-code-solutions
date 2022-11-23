/* eslint-disable no-undef */
/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) {
    return;
  }
  const newList = new LinkedList(value);
  list.next.data = newList.data;
}
