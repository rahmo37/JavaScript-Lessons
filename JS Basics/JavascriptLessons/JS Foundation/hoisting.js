//! Hoisting in JavaScript is the process where variables and function declarations are moved to the top of their containing scope during the compilation phase, before code execution starts.
// If you declare a variable or function, JavaScript acts as if you've declared it at the top of the current scope, even if you physically wrote it elsewhere.

// In JS, a variable can be declared after it has been used. In other words, a variable can be used before it has been declared.

//* A declaration introduces a variable to the program. It essentially tells the compiler or interpreter, "Hey, I've got this variable named so-and-so." The act of assigning a value to that variable is called initialization.

// let x; is a declaration without initialization.
// let x = 10; is a declaration with initialization.

// Lets see an example of hoisting,
x = 5;
console.log(x); // it works!
// uptill this point x is not even defined
var x; // declared later

// Now important thing to note is that variables declared with let and const are hoisted, but not the are not initialized.
// But when i am trying this with let it is giving me an error
try {
  y = 5;
  console.log(y);
  let y;
} catch (err) {
  console.log(err.message);
}
// So variables declared with both let and var both are hoisted but why they behave diffrently?
//because though they both are hoisted, both are not initialized, variables declared with var is assigned a value undefined, but variabled declared with let is not assigned a value of anything, thats why we cannot access that value before declaration.

// the scenario is different with const keyword. Because we know that you have to declare and initialize the variable in oneline when it comes to const

// ! Note that JS only hoists declaration not initialization

// Next time when you revise analyze this example
x = 5;
var x;
console.log(x, y);
y = 6;
var y;

/**
 * Finally,
 * Hoisting: Hoisting is the JavaScript interpreter's action of moving all variable and function declarations to the top of the current scope. However, it's important to understand that this is a conceptual way to understand how the JavaScript engine behaves; physically, the code doesn't actually move anywhere.

var: Variables declared with var are hoisted and automatically initialized with a value of undefined.

let: Variables declared with let are hoisted, but they are not initialized. They are in a "temporal dead zone" from the start of the block until the declaration is encountered. You cannot access them before they're declared and initialized, or you'll get a ReferenceError.

const: Like let, const declarations are hoisted but not initialized. However, you must initialize a const variable in the same statement where you declare it. If you don't, you'll get a SyntaxError. And similar to let, trying to access a const variable before its declaration will result in a ReferenceError.

So, the clarification for const is that it is hoisted (like let), but it must be initialized at the time of declaration. It's not that const cannot be hoisted; rather, it's that you can't access it before its declaration and initialization because of the "temporal dead zone" and the requirement to initialize upon declaration.
 */
