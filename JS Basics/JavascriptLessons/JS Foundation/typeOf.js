// ! In js there are 5 types of data types that can contain values:
/*
string 
number 
boolean
any objects
function
*/

// objects have 6 types
/*
Object
Date
Array
String 
Number
Boolean
*/

// And 2 data types that cannot contain values:
/*
null
nudefined
*/

// * Now you can use the typeof operator to find the data type of a JS variable

// for example
let a = "Bangladesh"; // outputs string
let b = 3.14; // outputs number
let c = NaN; // outputs number
console.log(typeof c);
console.log(typeof function () {}); // outputs function
var d = null;
console.log(typeof d); // suprisingly outputs object, so any variable declared as null is an object it seems

// JavaScript is weired as F**k

// * Anyways, primitive data value is a single simple data value, with no additonal properties and methods

// * a typeof operator can return one of these primitive types
/*
string
number
boolean
undefined
*/

// Complex types
// The typeof operator can return one of two complex types
/**
 * function
 * object
 */
// so the typeof operator returns "object" for objects, arrays, and null
// however the typeof operator does not return "object" for functions it returns "function"

// ! note that typeof operator is not a variable or object, it is just an operator just like + - / *

// *when we use type of with a variable, it returns a result right? either number or string or boolean, now this result it self is astring

// lets prove that
console.log(typeof typeof [5, 4]);

//* lets simply recall what a constructor method is.
// A constructor method is a special kind of method that lets you build a new object on the type, the constructor method is called upon.
// Basically when you are saying, const str = new String();
// the new String() is calling the constructor function to create a new string object

// In JavaScript, a constructor method is a special function inside a class that gets called when you create a new instance of that class

//* A constructor property can be called upon any value, to return the corresponding constructor function that was used to create that value

// Lets see an example

console.log("John".constructor);
console.log((123).constructor);
// if you use it on array it will return the array constructor function
console.log([1, 2, 3, 4, 5].constructor);
console.log(function () {}.constructor); //...etc

//* now to check what the type of an Array,Date and others specifically, we can create our own method, that will check the type.

// first way
function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}
// Basically if the indexOf method finally returns more than -1, it will return true otherwise false
console.log(isArray([1, 2, 3])); // retruns true

// second way
// Lets identify some thing
console.log(typeof Date); //outputs function

// Date: Refers to the Date constructor itself. It's a reference to the function, and you can use it with the new keyword to create date instances. Now the typeof Date will return 'function' because you're asking about the type of the Date constructor itself.

// since typeof Date, Array returns function we can create another function to check the type of Array, Dates and others

function isDate(myDate) {
  // if the passed in value has the type as [function: date]
  // then it will return true, otherwise false
  return myDate.constructor === Date;
}

console.log(isDate(new Date())); // returns true
// if you pass something else, like
console.log(isDate([1, 2, 3])); // returns false

//! Note that Array object already has an isArray() function

// Lastly lets again go through the difference between null and undefined
// undefined: This is a primitive value that represents the absence of a value or the absence of a definition. If you try to access a variable that hasn't been initialized yet, you get undefined.

// null: This is also a primitive value, but it represents the intentional absence of any value or object. It's a value you can assign to signify "no value."

// the typeof undefined is undefined and the type of null is object, but the represents the same value
// lets prove that

console.log(undefined == null); // values are same
console.log(undefined === null); // but types are not
