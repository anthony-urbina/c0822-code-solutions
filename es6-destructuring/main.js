const book1 = {
  title: 'Goodnight Moon',
  author: 'Margaret Wise Brown',
  libraryID: 51
};

const { title, author, libraryID } = book1;
console.log(title);

const book1Sentence = `The title of the book is ${title}, the author is ${author}, and the library id is ${libraryID}`;
console.log(book1Sentence);

const book2 = {
  title: 'JavaScript for Dummies',
  author: 'Emily A. Vander Veer',
  libraryID: 55
};

const { title: book2Title, author: book2Author, libraryID: book2libraryID } = book2;

const book2Sentence = `The title of the book is ${book2Title}, the author is ${book2Author}, and the library id is ${book2libraryID}`;
console.log(book2Sentence);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233
  }
];

const [book3, book4, book5] = library;
const [,,, book6] = library;
console.log('book 3:', book3);
console.log('book 4:', book4);
console.log('book 5:', book5);
console.log('book 6:', book6);
