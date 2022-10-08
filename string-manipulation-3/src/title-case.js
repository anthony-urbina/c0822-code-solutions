/* exported titleCase */
/*
make all characters in the string lowercase
create array of conjunctions articles and prepositions
create container
loop through string

when there's a space
segment the word before it

when it includes javascript or api
send JavaScript or API plus a space to the container
---------------------------------------

// check if the 2nd to last char in container is a colon or if the container is empty
// capatalize the first character

// scan the word
// check if it has a dash
// if it does, capitalize the word after the dash
// check if the word is api or javascript
// if it is then make it API or JavaScript
// regardless

// else if line 11 is not true
// check if the word is included in the array
// if it is
// make sure it is all lowercase

// finally:
// add a space to it
// save position of the space
// push to container

/*
if its the last letter then i want
*/

function titleCase(string) {
  var newString = string.toLowerCase();
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var container = '';
  var seperated = '';
  var tracker = 0;
  for (var i = 0; i < newString.length; i++) {
    if (newString[i] === ' ') {
      seperated += newString.slice(tracker, i);
      tracker = i + 1;
      if (container[container.length - 2] === ':' || container.length === 0 || (container[container.length - 1] === ' ' && minorWords.includes(seperated) === false)) {
        seperated = seperated.replace(seperated[0], seperated[0].toUpperCase());
        if (seperated === 'Javascript') {
          seperated = 'JavaScript';
        } else if (seperated === 'Api') {
          seperated = 'API';
        } else if (seperated === 'Javascript:') {
          seperated = 'JavaScript:';
        }
        if (seperated.includes('-')) {
          var dashIndex = seperated.indexOf('-');
          seperated = seperated.replace(seperated[dashIndex + 1], seperated[dashIndex + 1].toUpperCase());
          if (seperated.includes('Javascript')) {
            var newerString = seperated.slice(0, dashIndex + 1);
            newerString += 'JavaScript';
            seperated = newerString;
          } else if (seperated.includes('Api')) {
            newerString = seperated.slice(0, dashIndex + 1);
            newerString += 'API';
            seperated = newerString;
          }
        }
      }
      container += seperated + ' ';
    } else if (i === newString.length - 1) {
      seperated += newString.slice(tracker, i + 1);
      seperated = seperated.replace(seperated[0], seperated[0].toUpperCase());
      if (seperated === 'Javascript') {
        seperated = 'JavaScript';
      } else if (seperated === 'Api') {
        seperated = 'API';
      }
      container += seperated;
    }
    seperated = '';
  }
  return container;
}
