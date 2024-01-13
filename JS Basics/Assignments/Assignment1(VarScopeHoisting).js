// *Assignment1:
// ?related to JS Foundation folder, variables.js

// !Create a Script Using Different Variable Declarations:

// Write a JavaScript script that includes:
// At least two variables declared with each let, var, and const.
// Demonstrate the difference in scope by declaring variables inside and outside of a block.
// Show an example of hoisting with var and explain why it doesn't work the same way with let.
// Create a const object and modify one of its properties.
// Explain Your Code:

// !After writing the script, add comments to explain:
// How each variable is scoped.
// The impact of hoisting on var declared variables.
// Why you can modify the property of a const object but not reassign the object itself.

// !Reflection:
// Reflect on the implications of using let, var, and const in different scenarios. Consider how these declarations affect code readability, maintainability, and potential bugs.

// !------------------------------------------------------------------

// * 1 At least two variables declared with each let, var, and const.

// let
let xLet = "xLet";
let yLet = "yLet";

// var
var xVar = "xVar";
var yVar = "yVar";

// const
const xConst = "xConst";
const yConst = "yConst";

// * 2 Demonstrate the difference in scope by declaring variables inside and outside of a block.

// if a variable is declared with let is located inside a block it cannot be accessed outside of that block

{
  let zLet = "zLet";
}

// console.log(zLet); // Facing a ReferenceError: zLet is not defined

// on the other hand Variables declared with Var are not blocked scoped but function Scoped

// Meaning if the variable declared with Var if defined inside an if Block or regular block they will be accessible
{
  var zVar = "zVAr";
}

console.log(zVar);

// but if they are defined inside a function block they wont be accissible

function varBlockTest() {
  var aVar = "aVAr";
  let aLet = "aLet";
}

// console.log(aVar); // Facing a ReferenceError: aVar is not defined

// !Note: even let variables are also not accissible outside of a function block
// console.log(aLet);

// * 3 Show an example of hoisting with var and explain why it doesn't work the same way with let.

// When a variable is declared with var, it can be assigned a value even before the value is declared, becasue behind the scene, JS performs hoisting, meaning, later when the variable is actually declared the declare statement is hoisted to the top, and assignes an undefined value.

bVar = "bVar";
console.log(bVar);

// ! note: Something very important below is appearent
var bVar = 5;

console.log(bVar); // Why is it printing 5? if var bVar = 5 is hoisten wouldn't the value 5 would change with "bVar"? No because, it's important to note that only the declarations are hoisted, not the initializations (if there is any), meaning var bVar; is hoisted to the top. But the assignment bVar = 5; remains where it is, thats why bVar = 5 is the latest value

// We cannot achive this with let though.
bLet = "bLet";
console.log(bLet); //Facing an error, ReferenceError: Cannot access 'bLet' before initialization
let bLet;

// !Note: that just like var variables, let variables are also hoisted to the top but its is not assigned a value of undefined like var keyword they are not assigned any value. thats why we cannot assign a value before declaring it. They remain in a Temporal Dead Zone TDZ and trying to access it will result in a ReferenceError

// * 4 Create a const object and modify one of its properties.

// When you define a variable or and object with const keyword, you cannot reassign it.

// Creating a const object
const myObj = {
  name: "Obaedur Rahman",
  age: 27,
  hobby: "Nature Spectaror",
};

// This object is assigned with a const keyword, now we cannot reassign the object but we can definately change its properties.

// First lets try to reassign the object to see if it works
myObj = {}; //Facing an error, TypeError: Assignment to constant variable.

// But we could definately chnage one of its properties
myObj.name = "Arnob";
console.log(myObj); //Working perfectly

// * Reflect on the implications of using let, var, and const in different scenarios. Consider how these declarations affect code readability, maintainability, and potential bugs.

// let and cont keyword is blocked scoped, var is function scoped. when you declare a variable with let they have more flexible control, also it aligned with other programming languages as well, same goes for const, scope wise it also behaves like let. on the other hand var is more confusing. which damages readability

// When we talk about maintainabilibity and potential bugs, variables declared with var keyword definately are a perfect canditae because of their confusing nature. on the other hand const and let are more clean, readable, and intuative