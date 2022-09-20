function ExampleConstructor() {
}

console.log('value of ExampleConstructor.prototype', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype', typeof ExampleConstructor.prototype);

var returnExampleConstructor = new ExampleConstructor();
var instanceCheck = returnExampleConstructor instanceof ExampleConstructor;
console.log('value of instance check', instanceCheck);
