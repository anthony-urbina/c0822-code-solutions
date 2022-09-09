/* eslint-disable key-spacing */
/* eslint-disable comma-spacing */
/* eslint-disable quote-props */
/* eslint-disable quotes */
var arr = [
  {
    title: 'Thinking in Systems',
    author: 'Donella H. Meadows',
    isbn: '1603580557'
  },
  {
    title: 'Freakonomics',
    author: 'Steven D. Levitt',
    isbn: '0060731338'
  },
  {
    title: 'The Gulag Archipelago',
    author: 'Aleksandr Solzhenitsyn',
    isbn: '9780060154745'
  }
];

console.log('book info:', arr);
console.log('type of:', typeof arr);

var arrJSON = JSON.stringify(arr);

console.log('value of arrJSON:', arrJSON);
console.log('type of arrJSON:', typeof arrJSON);

var strJSON = '{"name": "Anthony Urbina", "id": "12100358"}';

console.log('value of strJSON:', strJSON);
console.log('type of strJSON:', typeof strJSON);

var objJSON = JSON.parse(strJSON);
console.log('value of objJSON:', objJSON);
console.log('type of objJSON:', typeof objJSON);
