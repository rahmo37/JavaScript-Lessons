// ! lets see the topics we are first need to understand to move forward with this lesson.

// The try statement: which lets you test a block thay may potentially have error
// The catch statement lets you handle the error if any found
// throw statement lets you create a custome error
// the finally statement lets you execute code, after try and catch regardless of result

// lets see the syntax
try {
  let str = "Hello World";
  console.log(str.indexOf(l));
} catch (err) {
  console.log(err.message, err.name);
}
// The err object thats returned, has two property
/**
 * name: the name of the error
 * message: the description of the error message
 */

// Throw statement. it allows you to create a custom error
// After the trow statement you can throw anyting, and data type even a object
// Lets see an example

let x = "Selim";

try {
  if (x == "") {
    throw { name: "Black Error:", message: "The input is blank" };
  } else if (isNaN(x)) {
    throw { name: "NaN Error:", message: "The input is Not a Number" };
  } else if (x < 5) {
    throw "too low";
  } else if (x > 10) {
    throw "too high";
  }
} catch (err) {
  if (err instanceof Object) {
    console.log(err.name, err.message);
  } else {
    console.log(err);
  }
} finally {
  // the finally block executes regardless of the result, as simple as that
  console.log("we are learning error handling");
}


// JS has a built in Error object that provides error information when an error occurs 
// Error Object has two properties, Name and Message

// An error name property will return six different error name property.

// EvalError --> An error has occured in the eval() function
// RangeError --> A number "out of range" has occured
// ReferenceError --> An illigal reference has occured
// SyntaxError --> A syntax error has occured
// TypeError --> A type error has occured
// URIError --> An error in encodeURI() has occured

