/* exported defaults */
/*
look at the first source property and compare it to all properties of target,
if it is equal, do nothing
else, add it to the target property as long as it has been comparted to all of targets properties first

v2
if the keys are not equal
then i will add it to the target prop as long as all values have been checked
*/

function defaults(target, source) {
  for (var key in source) {
    if (key in source !== key in target) {
      target[key] = source[key];
    }
  }
}
