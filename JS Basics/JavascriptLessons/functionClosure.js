// This tuotorial is coming from Sumit vai's personal explanation of function closure

// First lets define what Laxical and Global scope is
// Lexical Scope: The local environment within a function, along with any enclosed scopes and the global scope.
// Global Scope: The environment that exists outside of all functions.

// Enclosed scopes are like the layers of local scopes that are nested within one another. Imagine you have a function inside another function—each of those functions has its own local scope, and they enclose one another. The inner function has access to its own scope, the scope of the enclosing function, and so on, up to the global scope.

// As for your second question, yes, Lexical Scope includes not just the local scope of a function, but also any enclosed scopes and the global scope. In other words, if you're inside a function, you have access to variables in your own function (local scope), variables in any enclosing functions (enclosed scopes), and variables in the global scope. So, Lexical Scope is like a set of concentric circles, starting from the local scope and going outward to include enclosed scopes and the global scope

// Lets go step by step

// Defiing two global variable
var num1 = 2;
var num2 = 3;

// How does this function is getting access to the global variables that are outside of the function body?
var sum = function () {
  return num1 + num2;
};

// Lets first define what is internal propery or internal slot of an object.

// The [[...]] notation is often used in JavaScript specification documents and technical discussions to denote internal properties or internal slots of an object. These are properties that are not directly accessible from JavaScript code but are used by the JavaScript Engine internally to manage state or behavior. While some internal properties are observable some are not exposed, some exposed internal properties include,
/**
[[Scopes]]
[[Prototype]]
[[Target]]
[[IsClassConstructor]]
[[Handler]]
[[Realm]]
 */

// When we do console dir to the actual sum function, we will find an internal property [[Scope]] and inside that there is a global object

// The Global object we're seeing inside the [[Scopes]] internal property refers to the global object of the JavaScript environment in which the function was defined. In a browser environment, this is usually the window object. The Global object contains various properties and methods that are globally accessible, like document, location, etc.

// And since we defined num1 and num2 globally we can also see these properties inside the global object
console.dir(sum);

// The sum function keeping the global object inside its internal property, "[[Scope]]" is just a theoritical explanation of closure

// Now lets see a simple example

// a global variable,
let globalVar = "Global";

// lets define a function within a function
function outerFunction() {
  let outerFuncVar = "Outer function variable";
  return function innerFunction() {
    return outerFuncVar + " " + globalVar;
  };
}

// Now lets call the outerFunction that returns the innerFunction and save it to a variable
let returnedInnerFunc = outerFunction();

// lets now call the returnedInnerFunc
console.log(returnedInnerFunc());

// Now as you can see we just called the innerfunction not the outer, how does it have the access to the outerFuncVariable?

// Thats where clousre comes in,

// Lets dir the returnedInnerFunc
console.dir(returnedInnerFunc);
// just like how sum had the global object in its innerScope, the returnedInnerFunc has another object called closure, which has the outer function and the variable in the outerFunction(outerFuncVar)

// So all in all the innerFunction is just packaging its parents variable and grabbing them when ever they need to access them.

// Lets see another example
//  we have a function called bankAccount

// It takes a parameter called initialBalance, which you set a value of blance variable that reside in the outer function. and inside it, its returning a function which in turn return the balance in its outer scope.
function bankAccount(initialBalance) {
  let balance = initialBalance;
  return function () {
    return balance;
  };
}
// account variable which will contain the innnerFunction
let account = bankAccount(100000);
// Now we are just printing the innerFunction
console.dir(account); // When we do console.dir we find the following,
// [[Scopes]]
// :
// Scopes[3]
// 0
// :
// Closure (bankAccount)
// balance
// :
// 100000

// This closure object has the balance property of its outer function

// ! Note one important thing, the balance variable is not directly accessible however we can have access to it with the innner anynomas function. thus effectively creating a private property which is accessible with a function

// Now Closure object only included when we use a variable from the enclosed scope, otherwise it wont be included, lets see an example

function testOuter() {
  let outerFuncVar1 = 10;
  return function testInner() {
    let innerFuncVar = 5;
    return innerFuncVar;
  };
}

// notice that we are not using the outerFuncVar inside the innerFuncVar
// lets console dir the innerFunction now

let getInnerFunction = testOuter();
console.dir(getInnerFunction);
// [[Scopes]]
// :
// Scopes[2]
// 0
// :
// Script {globalVar: 'Global', returnedInnerFunc: ƒ, account: ƒ, getInnerFunction: ƒ}
// 1
// :
// Global {window: Window, self: Window, document: document, name: '', location: Location, …}

// No closure object exists

// On the otherhand if you have muliple enclosed variable, and you use just one of them, the closure object will be added and it will contain the enclosed variable used in the innerFunction.

// Lets see a weired trait of closure

// Lets define a self invoking function

(function () {
  var str1 = "Hi";
  var str2 = " World";
  var concatinate = function () {
    return str1 + str2;
  };
  console.log(concatinate());
  console.dir(concatinate);

  str1 = "Hello";
  str2 = " Universe";

  console.log(concatinate());
  console.dir(concatinate);
})();

// When we console.log and console.dir, in the first log we see Hi World but in second log we see Hello Universe, however when we observe both dir and open the closure object for both we find both variables are changed to Hello Universe, the reason is JS keeps referece of the variable not the copy

// OKay lets explore another thing,
//  Before when we used var to define a variable globally we found then inside the global obejct when console.dir that function, but if we declare them with lert or const, we are not going to find it inside the global object, rather we are going to find them inside the script object of the innerProperty scope.

let ltr1 = "a";
let ltr2 = "b";

function returnLetter() {
  return function printLetter() {
    return ltr1 + ltr2;
  };
}

console.log(returnLetter()());
console.dir(returnLetter());
// [[Scopes]]
// :
// Scopes[2]
// 0
// :
// Script {globalVar: 'Global', ltr1: 'a

// They are found inside the script object, furthermore they will not exist inside the global object anymore

// Lets create a delay and see if JS still holds the closure object and its variable or not

function stopWatch() {
  let startTime = Date.now();
  function getDelay() {
    console.log(Date.now() - startTime, "Hi");
  }
  return getDelay;
}
let timer = stopWatch();

for (let i = 0; i < 10000000; i++) {
  var a = Math.random() * 10000000;
}

timer();
// It remembers the stopWatch variable!!! so that closure for you
// ! note if you decided you dont want to use the timer function anymore its best to assign it as null
timer = null;
// NOw the momory wont occupy it anymore
