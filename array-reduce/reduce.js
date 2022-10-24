// my solution

function reducee(array, reducer, initialValue) {
  var container = array[0];
  if (initialValue === undefined) {
    for (var i = 0; i < array.length - 1; i++) {
      container = (reducer(container, array[i + 1]));
    }
  } else {
    for (var j = 0; j < array.length; j++) {
      if (j < 1) {
        container = (reducer(initialValue, array[j]));
      } else {
        container = (reducer(container, array[j]));
      }
    }
  }
  return container;
}

// class solution

function reduce(array, reducer, initialValue) {
  let result = initialValue;
  let i = 0;
  if (arguments.length < 3) {
    result = array[0];
    i = 1;
  }
  for (; i < array.length; i++) {
    result = (reducer(result, array[i]));
  }
  return result;
}
