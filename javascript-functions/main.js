/* eslint-disable no-unused-vars */
function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  console.log('seconds:', seconds);
}

function greet(name) {
  var hey = 'Hey, ' + name;
  console.log('greeting:', hey);
}

function getArea(width, height) {
  var result = width * height;
  console.log('area:', result);
}

function getFirstName(person) {
  var fetch = person.firstName;
  console.log(' person object first name:', fetch);
}

function getLastElement(array) {
  var fetch = array[array.length - 1];
  console.log('last element of array:', fetch);
}
