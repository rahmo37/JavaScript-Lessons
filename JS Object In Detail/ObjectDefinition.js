// !In JavaScript objects are everythig, if you understand object, you understand JS

// In JavaScript almost everyting is an object

/**
 * Booleans can be objects
 * Numbers can be objects
 * Strings can be objects
 * Dates are always objects
 * Maths are always Objects
 * Regular Expressions are always objects
 * Arrays are always objects
 * Functions are always object
 * Objects are always objects
 * All JavaScript Values,except primitives, are objects
 */

//* JavaScript Primivites
// A primitive data type has no properties or methods

//* What primitive types are there in JS?
/**
 * string
 * number
 * boolean
 * null
 * undefined
 */

// ! A vary important note is, Primitive types are immutable and hardcoded, therefore cannot be changed.`

// * lets descover what is Immutable and what is mutable

// Mutable: mutable means you can change something after its created, for example, you can change the elements inside an array or the propertiers of an object.

// Lets say you have an array
let fruits = ["apple", "banana"]; //fruit array now has 2 items
fruits.push("cherry"); // Now fruits array has 3 items, so the inner part of the array is changed
console.log(fruits);

// Lets say you have an object
let dog = {
  name: "Rex",
  age: 3,
};
// lets change one of its element
dog.name = "Max";

// Now immutable: Immutable means you cant change it after it's created.
// You cant change the characters inside a string or the value of a number.
// when we do operation on them, you get a new value rather then changing the existing one.

// for example
let x = 10;
let y = x + 5;
// Here we are performing an operation with x, but x remains the same, just y becomes 15

// another example,
let str = "hello";
let newStr = str.toUpperCase();
console.log(str, newStr); //Here str has the same value, even though we performed operation on str

//* A question arrieses,
//* "But when i reassign x, its value do change, i mean i can say x = 20, it will change the value of x from 10 to 20 right?"

// Answer: You're absolutely correct that you can reassign x to a new value like 20. However, the key point here is that the number 10 itself isn't changed. Instead, the variable x now points to a new number, 20.
// So in the expression x = 20, you're not "mutating" or changing the 10 into a 20. You're creating a new number, 20, and making x point to that new number.

//* Another question, arises
//* But lets say i have x pointing to 10 and then i reassign x to 20, now what happens to 10, who is pointing to 10? or is it deleted?

//!Anaswer: Great question!
// Lets break you Question in steps,

/**
 * You declare let x = 10;. Now x points to a memory location holding the number 10.
 * You then say x = 20;. x is updated to point to a new memory location holding the number 20.
 * The number 10 is now not pointed to by any variable in your scope.
 */

//When you reassign x from 10 to 20, there's no longer a variable in your code that directly references the number 10. In most cases, this would make the number 10 eligible for garbage collection, a process by which languages like JavaScript automatically reclaim memory that is no longer in use

//! So here is my final understanding about mutable and immutable,
//! Mutable means i can change the value or the innercontent of a variable, like arrays or objects also any changes you make to the object or array will be visible to any variable that references that same object or array, but when its immutable that means the value cannot be changed, you do operation with the variable, or you can reassign the variable to point to a new value, but the original value will not change.

//* Another Question
//* Examine this code,
let z = 10;
z = 20;
// As per you explanation, when you reassign the variable x to 20, the value 10 becomes orphaned and collected by garbage collector,

// Now look at this,
let obj = {
  name: "Whatever",
  age: 40,
};
obj = {};
//i have reassigned obj to a new object, now what happed to the first object

// The principles are similar for both primitive types and objects when it comes to garbage collection.

// !Answer: In the second example, when you reassign obj = {};, the original object { name: "Whatever", age: 40 } becomes "orphaned" because it's no longer being referenced by any variables. Just like the orphaned number 10 in your first example, this object is now eligible for garbage collection.

//* Object are Variable
// JS variabls can contain single value
let person = "Jhon Doe";

// JS variables can also contain many values.
// Objects are variables too. And they can contain many values

const pokemon = {
  name: "MewTwo",
  catagory: "Legendary",
};

// Creating a JavaScript object in JS,
// There are 4 ways

// Create a single object using an object literal

const bug = {
  name: "Dragonfly",
  color: "Red",
};

// Create a single object with the keyword new
const bird = new Object();
bird.name = "Doyel";
bird.color = "Grey";

// Define an object constructor, and the create objects of the constructed type
// Create an object using Object.create() method.

// Testting object mutability
// lets say you have an object

const country1 = {
  name: "India",
  age: 50,
};

// now lets pass this object as avalue of another object
const country2 = country1;

// now lets change a property of the first object
country1.name = "Bangladesh";

console.log(country2);

// The name of 2nd object(country2) is also changed
