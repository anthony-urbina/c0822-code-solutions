var student = {
  firstName: 'Anthony',
  lastName: 'Urbina',
  age: 21
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName', fullName);

student.livesInIrvine = false;
console.log('value of student.LivesInIrvine', student.livesInIrvine);

student.previousOccupation = 'construction';
console.log('value of student.previousOccupation', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'CRV',
  year: '1998'
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]', vehicle['color']);
console.log('value of vehicle["isConvertible"]', vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

var pet = {
  name: 'Figaro',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet', pet);
