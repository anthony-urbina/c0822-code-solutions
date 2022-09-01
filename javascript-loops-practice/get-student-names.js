/* exported getStudentNames */

/*
create a function that returns the names of students from objects within arrays
create a storage container
access the property name within each object of the array if it has one
if it does, steal that value and put it in the storage container
if it doesnt, move on to the next object
do that x amount of times until there are no more objects with name properties left to check
return the values of the name property
*/

function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}
