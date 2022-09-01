/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  return person.firstName.at(0) + person.lastName.at(0);
}
