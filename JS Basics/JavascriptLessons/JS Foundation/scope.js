// scope determines the accessibility or the visibility of variables,

// Now JS has 3 types of scope
/**
 * Block scope
 * Function scope
 * Global scope
 */

// You can think of scope as Individual Planet

// Block Scope
// Variables declared inside a {} block cannot be accessed from outside the block
// But variables declared in the global scope can be accessed in the block scope

// Now what statements's curly braces are considered as block scope?
/**
 * if statement
 * for
 * while and do-while
 * switch
 * regular block
 */

let x = 5;
{
  console.log(x);
}

// variables declared with the var keyword can NOT have block scope
// Variables inside a {} block can be accessed outside of a block
{
  var val = 2;
}
console.log(val);

// Local scope
// Variables declared within a function become local to the function
// Since variables declared within a function, only local to that function, same named variable can be declared in another function
// lets see an example

let A = function () {
  let x = 5;
};

let B = function () {
  let x = 5;
};

// ! A thing to note is that each function creates a brand new scope. and variables decalred with var,let,const behave similarly when declared inside a function, meaning when declared inside a function they all have function scope
// but if you declare a variable inside a block scope they will not always be function scoped,
// specifically in a block scope if you declare a vaiable with var, you can access it outside of that scope
// But variables declared with let or const cannot be accessed outside of that scope

// Global Scope is a scope that is outside of any block scope or function scope, it is the Universe where Planets(function scope and block scope) lives
let y = 5; // out side of any scope

// In JS object and functions are also variables, meaning they can be saved in variables

// Notice something very interesting here
// I declared a variable with no keyword, Now JS is automatically assuming that this variable is global variable, thus can be accessed from outside the function
function myFunction() {
  carName = "volvo";
}
myFunction();
// remember to note that the carName variable will only be created when the function runs
console.log(carName);

// same with the block statements
if (x === 5) {
  result = "X is 5";
}
console.log(result);
// But rememmer to note that the result variable will only be created when the if Block runs, if x was never true result variable would not be created

// Any Global variable declared with var keyword belongs to Window Object
var a = "I belong to window object";
console.log(window.a);

// But let variables don not belong to window object
let b = "I dont to belong to window object";
console.log(window.b); // outputs undefined


// ! Finally note that try catch is also blocked scope!
