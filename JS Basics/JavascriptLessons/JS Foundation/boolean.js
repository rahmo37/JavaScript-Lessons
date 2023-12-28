// A JavaScript Boolean represents either two data values either true or false

// for example
let x = true;
let y = false;

// We have a Boolean() function that directly evaluates an expression to be true or false
console.log(Boolean(10 > 9));

// This can also be done without using a method
console.log(10 > 9);

// In JS everything that has a value is true
// For example
let name = "Obaedur";
let age = 27;
console.log(Boolean(name));
console.log(Boolean(age));

// Everything that does not have a value, null or undefined, is false
let empty;
let nullVal = null;
let undefVal = undefined;
console.log(Boolean(undefVal));

// Also 0, -0, "", NaN these values are also false

// So the complete list is
const falsyValArr = [undefined, null, "", 0, -0, NaN];
falsyValArr.forEach(function (value) {
  console.log(Boolean(value), "<--");
});

// Boolean also has an Object syntax
let boolVal = new Boolean(false);
console.log(boolVal.valueOf());

const data2 = "Hi"
console.log(Window.data2);