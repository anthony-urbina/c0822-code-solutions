function filter(array, predicate) {
  var container = [];
  for (var i = 0; i < array.length; i++) {
    var valueAtIndex = array[i];
    if (predicate(valueAtIndex) === true) {
      container.push(array[i]);
    }
  }
  return container;
}
