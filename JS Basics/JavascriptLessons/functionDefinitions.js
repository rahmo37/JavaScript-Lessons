// JS functions are defined with the function keyword

// You can use a function declaration or a function expression

// Function Declaration Syntax
function testFunction(parameters) {
  //Code to be executef
}

// ! note that functions are not executed immidiately. They are "saved for later use". They are only executed when they are invoked(called upon).

function myFunction(a, b) {
  return a * b;
}
// Wont be executed now
// You can invoke this function anywhere in this file's body, and it will be invoked then
console.log(myFunction(6, 7));

// We do not end a function with a semi-colon, notice the functions above none has any semi colon at the end, but we do insert semi-colon at the end of every statement

// JS functions can also be defined using an expression.

// A function expression can be stored in a variable, then that variable can be used as a function

const x = function (a, b) {
  return a + b;
};

console.log(x(5, 10));

// you can even save the returned value in another variable

let result = x(2, 10);
console.log(result);

// A function that does not have a name is called the anynomous function
// A function that is working as an expression, (meaning as a value of another variable) does not need a function name, as they can be invoked using the variable name.

// There is also a function constructor

// As you have seen in the previous examples functions are defined with a function keyword, How ever they can be defined using a Function constructor.

const myFunction1 = new Function("a", "b", "return a * b"); // Have to define the parameter name and the block of code as a string

let c = myFunction1(4, 3);
console.log(c); // 12

// Function Hoisting

// What is hoisting again? Hositing is JS's default behaviour of moving declarations to the top of the current scope.

// Hoisting applies to variables declaration and function declaration , for this JS functions can be called before they are declared.

// for example,

addTwoNumbers(5, 6); // invoking the function, which i not even declared!

function addTwoNumbers(a, b) {
  console.log(a + b);
}

// ! note that function expressions are not hoisted

// const x = function (a, b) {
//   return a * b;
// }; this will not be hoisted

// Self Invoking function

// Self invoking function is a function that calls it self immidiately
// A self invoking function calls itself immidiatly as soon as its defined
// It is also abbreviated as IIFE
// An IIFE is a function expression, thus ends with a semi-colon
// It does not have/require a name because we are not going to call it later on

// let see an example
//
(function () {
  console.log("I am immidiatly Invoked!");
})();

// Yoc can even pass parameters

(function (a, b) {
  console.log("I am immidiatly invoked and adding " + (a + b));
})(3, 5);

// A function can be used as values, when it returns an actual value
// For example

const val = x(10, 40); // the x function is returning a value which is then saved to val variable
console.log(val);

// Now since x is returning a value, it can be used in other expression as well,
// For example

const val1 = x(10, 100) + 50;

console.log(val1);

// functions are objects
// Though when you use typeof operator in a function it returns a function, they are best described as an object.

console.log(typeof x, typeof myFunction);

// JS functions has properties and methods. The argument.lenght property returns the number of arguments recieved when the function was invoked.

function multiplyNumbers(a, b) {
  console.log(arguments.length); // returns 3. because even though the parameter used in the function is 2, since 3 arguments were passed, it returns 3
  return a * b;
}

console.log(multiplyNumbers(5, 6, 7));

// Use a toString method to convert a function defination to string
console.log(typeof multiplyNumbers.toString());

// A function defined as a property of an object, is called a method to the object

// ! Note when a function is written to create a new object, is called an object constructor

// Arrow function

//  Arrow functions are shorter way to write a function. The function and return(only if you have one line) keywords are removed and => symbol is added.
// Lets look at an example.

function aMessage() {
  console.log("I love java and javascript i am message 1");
}

const aMessage2 = () => console.log(this);

// ! Note you cannot use an arrow function in an object and also you this at the same time, They are just not well suited for defining object methods.

const obj = {
  name: "Obaedur Rahman",
  method: () => {
    console.log(this.name);
  },
};

obj.method(); // Undefined

// using this in an arrow function can be tricky because it doesn't work the way it does in regular functions. It's grabbing the this from somewhere else, which can lead to unexpected results. That's one reason why arrow functions are not recommended for object methods if you need to access the object's properties using this.


//! Arrow functions are not hoisted

