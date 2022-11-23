/* exported swapFront */

function swapFront(list) {
  if (!list.next) {
    return list;
  }
  const body = list.next.next;
  const neck = list.next;
  const head = list;
  head.next = body;
  neck.next = head;
  return neck;
}
