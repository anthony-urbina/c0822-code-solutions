const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

var x = parseInt(process.argv[2]);
var y = parseInt(process.argv[4]);
var operator = process.argv[3];

if (operator === 'plus') {
  add(x, y);
} else if (operator === 'minus') {
  subtract(x, y);
} else if (operator === 'times') {
  multiply(x, y);
} else if (operator === 'over') {
  divide(x, y);
}
