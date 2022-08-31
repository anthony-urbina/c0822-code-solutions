var num1 = 8;
var num2 = 24;
var num3 = 37;

var maximumValue = Math.max(num1, num2, num3);
console.log('value of maximumValue:', maximumValue);

var heroes = ['batman', 'ironman', 'spiderman', 'ant-man'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    Title: 'Harry Potter',
    Author: 'J.K.R.'
  },
  {
    Title: 'Gulag Archipeligo',
    Author: 'A.S.'
  },
  {
    Title: 'Lord of the Flies',
    Author: 'W.G.'
  }
];

var lastBook = library.pop();
console.log('last book:', lastBook);

var firstBook = library.shift();
console.log('first book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = ['Anthony Urbina'];
var firstAndLastName = fullName[0].split(' ');
console.log('value of firstAndLastName', firstAndLastName);
var firstName = firstAndLastName[0];
var sayName = firstName.toUpperCase();
console.log('value of sayName:', sayName);
