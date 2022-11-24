/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return;
  }
  const secondHalf = list.next.next;
  list.next = secondHalf;
}
