/* eslint-disable no-unused-vars */
function convertMinutesToSeconds(minutes) {
  var sum = minutes * 60;
  return sum;
}

var seconds = convertMinutesToSeconds(5);
console.log('seconds:', seconds);

function greet(name) {
  var hey = 'Hey, ' + name;
  return hey;
}

var heyResult = greet('Beavis');
console.log('greeting:', heyResult);

function getArea(width, height) {
  var result = width * height;
  return result;
}

var getAreaResult = getArea(2, 4);
console.log('area:', getAreaResult);

function getFirstName(person) {
  var fetchFirstName = person.firstName;
  return fetchFirstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('person object first name:', getFirstNameResult);

function getLastElement(array) {
  var fetchLastElement = array[array.length - 1];
  return fetchLastElement;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('last element of array:', getLastElementResult);
