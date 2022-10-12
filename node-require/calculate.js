const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

var x = parseInt(process.argv[2]);
var y = parseInt(process.argv[4]);
var operator = process.argv[3];

if (operator === 'plus') {
  console.log('result:', add(x, y));
} else if (operator === 'minus') {
  console.log('result:', subtract(x, y));
} else if (operator === 'times') {
  console.log('result:', multiply(x, y));
} else if (operator === 'over') {
  console.log('result:', divide(x, y));
}
