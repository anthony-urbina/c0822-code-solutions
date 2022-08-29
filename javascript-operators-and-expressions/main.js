var width = 3;
var height = 8;
var bill = 100;
var payment = 97;
var quizzes = 80;
var midterm = 90;
var final = 87;
var firstName = 'Anthony';
var lastName = 'Urbina';
var pH = 8;
var headCount = 24;

var area = height * width;
var change = bill - payment;
var grade = (quizzes + midterm + final) / 3;
var fullName = firstName + ' ' + lastName;
var isAcidic = pH < 7;
var isSparta = headCount === 300;
var motto = fullName;
motto = motto + ' is the GOAT';

console.log('value of area', area);
console.log('typeof area', typeof area);

console.log('value of change', change);
console.log('typeof change', typeof change);

console.log('value of grade', grade);
console.log('typeof grade', typeof grade);

console.log('value of area', area);
console.log('typeof area', typeof area);

console.log('value of fullName', fullName);
console.log('typeof fullName', typeof fullName);

console.log('value of isAcidic', isAcidic);
console.log('typeof isAcidic', typeof isAcidic);

console.log('value of isSparta', isSparta);
console.log('typeof isSparta', typeof isSparta);

console.log('value of motto', motto);
console.log('typeof motto', typeof motto);
