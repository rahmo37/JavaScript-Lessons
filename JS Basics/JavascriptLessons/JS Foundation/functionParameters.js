//! We alredy know about parameters

// Now a JS function does not performe and checking on parameter values, meaning they dont check what their type is.

//* lets clear the confusion about the parameter and agrument

// Parameters are the named lists in the function definition amd function arguments are the real values passed to and recieved by the fumction

// Parameter rules
/**
 * JS function definitions do not specify data types for parameters
 * JS function do not check or perform type checking on the passes arguments
 * JS functions do not check the number of arguments recieved
 */

// Default Parameters

// If a function is called with missing arguments (less than declared), the missing values are set to undefined

// In some cases maybe you want some of the parameters to be undefined but sometimes it is better to assign default value to the parameter to stay on the safe side

// lets see an example

function addNumbers(a, b) {
  return a + b;
}

// We have a function that takes two parameters and add them, now what if for some reason you do not send a value for the second parameter, lets see what it returns

console.log(addNumbers(3)); // Out puts NaN

// Wouldn't it be great if we had a default number set for the value of b ?

// lets see how we could do that
function multiplyNumbers(a, b = 7) {
  return a * b;
}

console.log(multiplyNumbers(6));

// Returns 42
// The value for b is set to 7 even if you do not provide a value for the parameter b it will take the value of 7 for the b

// ! Now here is the interesting part, if you provide a value for b, the default value will be ignored and the passed value will be taken

// Argument Object
//  JS have a built in object called Argument object.
//  The argument object contains an array of arguments used when the function was called.
//! Note That though the argument object behaves like an array its not an actual array

// ! Another note, if a function is called with too many arguments/ aka more that the number of parameters in the function, those arguments can be accessed with the arguments object. argument object has all the arguments passed to the function

// finds the max num in a number of arguments
const numArr = [12, 34, 56, 78, 1, 10, 43];

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(findMax(...numArr), "Max Val");

// Now remember that arguments are passed by values and objects on the other hand are passed by reference.

// What it that even mean?

// lets say we have a function that changes a parameters value to some other values, but the arguments value is not ChannelMergerNode, lets see an example to understand better

// Lets say you have a variable

const a = "I am letter a";

// This function changes the value of the passes in argument
function changeValue(x) {
  x = 5;
  return x;
}

// Now lets console.log the retured value and the a variable

console.log(a, "    ", changeValue(a));
//  as you can see the value of a did not change

// on the other hand the value of an object would change because an object is passed by refenrece

function changeObjecValue(x) {
  x.one = 7;
  return x;
}

const numObj = {
  one: 1,
  two: 2,
};

console.log(changeObjecValue(numObj), numObj); // in both case the first properties value is changed to 7
