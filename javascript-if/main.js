/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// 1

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

// 2

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else return false;
}

// 3

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

// 4

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

// 5

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

// 6

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age > 0) {
    return false;
  }
}

// 7

function categorizeAcidity(pH) {
  if (pH > 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH === 7) {
    return 'neutral';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yako' || name === 'wakko') {
    return "We're the warner brothers";
  } else if (name === 'dot') {
    return "I'm cute";
  } else {
    return 'Goodnight Everybody!';
  }
}
