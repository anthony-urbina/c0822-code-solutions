const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const isEven = numbers.filter(num => num % 2 === 0);
console.log(isEven);

const isOverFive = numbers.filter(num => num > 5);
console.log(isOverFive);

const startsWithE = names.filter(name => name[0] === 'E');
console.log(startsWithE);

const includesD = names.filter(name => {
  for (var i = 0; i < name.length; i++) {
    if (name[i] === 'D' || name[i] === 'd') {
      return true;
    }
  }
  return false;
});
console.log(includesD);
