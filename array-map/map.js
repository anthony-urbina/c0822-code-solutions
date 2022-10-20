function map(array, transform) {
  var container = [];
  for (var i = 0; i < array.length; i++) {
    container.push(transform(array[i]));
  }
  return container;
}
