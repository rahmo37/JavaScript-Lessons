//! lets first define a regular function and than transform that into an arraow function

const a = function () {
  return "i am the alphabet a";
};

// now lets transform this,
const b = () => {
  return "i am the alphabet b";
};
console.log(b());

// *what are the benifits of this?
/**
 * Arrow functions have a more cleaner syntax when compared to traditional function expressions. This can make code shorter and more readable.


 *  You know how sometimes we just get to the point in conversations? Arrow functions can do that too. If there's just one thing to do, they just do it without needing the word return.

So instead of saying: "I think, therefore, I am saying, the number doubled is: " + num * 2; We just say: num => num * 2


 * Got a super quick job? Arrow functions are perfect for one-liners, especially when you're dealing with arrays and need to transform stuff fast.

Like turning this: [1, 2, 3]

Into this: [2, 4, 6] using something snappy like numbers.map(num => num * 2)
 */

// * lets remove the return keyword
// remember this only works if the function has only one statement

const c = () => "i am the alphabet c";
console.log(c());

// * lets pass some parametets
const anyAlphabet = (alphabet) => "i am the alphabet " + alphabet;
console.log(anyAlphabet("d"));

// infact if you have only one parameter you can even skip the parentheses around the parameter
const myName = (name) => "My name is " + name;
console.log(myName());
// well when is save the file, pretier plugin adds the parenthese back again

// *lets see how we can use it as a callback function
// lets define an array,
const arr = [1, 2, 3];

// for regular function
const multipleOfTwo = arr.map(function (value, index, arr) {
  return value * 2;
});
console.log(multipleOfTwo);

// for arrow function
const addValuesToItself = arr.map((value, index, arr) => value + value);
console.log(addValuesToItself);
// notice this synatx, the function and return keyword is removed, => is added, then the expression, thats it!

// * What about this?
// The way of handling the this keyword is also different in arrow function compared to the regular functions
// In short with the arrow function there are no binding of this keyword.
// In regular functions,  the this keyword represents the object that called the function, which could be the window, the document object, or any element,
// with arrow functions the this keyword always represents the object that defined the arrow function.

// lets see an example

// Regualar function
const hello = function () {
  document.getElementById("demo").innerHTML += this;
};

// We want to trigger an event when the window object loads and calls the hello function
window.addEventListener("load", hello);
// so when the window loads the the this keyword refers to the window object

// Also we want to trigger an event. When click event is occured, and we want the button to call the hello function
const button = document.getElementById("btn").addEventListener("click", hello);
// when the user clicks the button, this time it the this keyword reffers to the button object.
// So its proven, with a regular function, this represents the object that calls the function.

// now lets look at arrow function
const hello1 = () => {
  document.getElementById("demo").innerHTML += this;
};

// We want to trigger an event when the window object loads and the window object calls the hello1 function
window.addEventListener("load", hello1);
// so when the window loads the this keyword refers to the window object

// Also we want to trigger an event. When click event is occured, and we want the button to call the hello1 function
const button1 = document
  .getElementById("btn")
  .addEventListener("click", hello1);
// Now when the user clicked the button, it still printed the window object, the binding did not take place.

// so in conclusion with the regular function, the this keyword refers to the object it is called from, but in arrow function, the function becomes constant, and it stays with its ogrinal owner.
