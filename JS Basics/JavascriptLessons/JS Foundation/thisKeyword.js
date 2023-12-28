// 1st definition In JavaScript, this is like a reference to the current object or context. Think of it as saying "the current thing I'm working with."
// 2nd definition, The this keyword in JavaScript refers to the "current object" in context. Think of it as a way of saying "myself" when an object is talking about itself.

// * Now the This keyword has different values depending on where it is used.

/**
 * In a method(an object's function) this refers to the owner object.
 * Anole, this refers to the global object
 * In function (not any class or objects function)/ this refers to the global object
 * in a function, that is in strict mode, this refers to undefined, not any global object
 * In an event this refers to the element that recieved the event
 * Methods like call(), and apply() can refer this to any object
 */

// * Owner object

// lets say you have a object named person, and it has some propertise and a method

const person = {
  firstName: "Obaedur",
  lastName: "Rahman",
  age: 27,
  printSummary: function () {
    return this.firstName + " " + this.lastName + " " + this.age;
  },
};

// ! Notice that we are only using the this keyword in the function, when we are calling the objects own property inside the function's body.
// lets say that you are writing a letter about youself, How are you going to discribe youe self?

// My Name is Obaedur Rahman, My age is 27. Notice when you are talking about youself you are never phrasing it in this way, Obaedur Rahman's name is Obaedur Rahman, Obeadur Rahman's age is 27. you are yousing my name, my age etc. The this keyword works the same way, when you are calling an object's own property you dont need to call them with object's name, you can just say this.firstName, this.lastName, this.age etc.

//* Anole, this refers to the global object

console.log(this); // outputs window object

//* In a function this refers to the global object

// lets say you have a function,
function a() {
  console.log(this);
}

a(); // outputs window

//* In strict mode, this refers to undefined from a function

function b() {
  "use strict";
  console.log(this);
}

b(); // outputs undefined

// lets see if we have strict mode enabled globally what this returns
console.log(this); // still refers to the window object

// * In an event this refers to the element that recieved the event.
// lets say the HTML document has an element which passes this as an argument to a function defined in js file. now lets see what this prints, when an onlick event is fired

function test(element) {
  console.log(element); //returns the button element that was pressed to trigger the event
}

// * Methods like call(), and apply() can refer this to any object
// To understand the call function we first need to understand the implicit and explicit binding

// Implicit binding in JavaScript refers to when the this keyword is automatically set to the object before the dot when a function is called.

// You know when you call a function like object.doSomething(), right? With implicit binding, the this inside doSomething just refers back to object. So, it's like the function is saying, "Who called me? Oh, object did! So, this means object now."

// lets see an example
const toy = {
  firstName: "Pikachu",
  speak: function () {
    return "My name is: " + this.firstName;
  },
};
console.log(toy.speak()); // this is reffering to the object that it was called from. When the object is the function's own parent it is called the implicit binding.

// now explict binding, explicit binding is when we are binding one parent object's method's This key word to a completely different object.

// for example lets say we have two objects

const pokemon = {
  printPokemon: function () {
    return (
      " This pokemon is called: " +
      this.name +
      " " +
      "The type of this pokemon: " +
      this.type
    );
  },
};

const legendary = {
  name: "Rayquaza",
  type: "Dragon/Flying",
};

// Using the call method, we can execute the printPokemon function and explicitly tell it to use "legendary" as its "this" context:
console.log(pokemon.printPokemon.call(legendary));

// So, explicit binding is when we use methods like call, apply, or bind to set the "this" context for a function call.

// lets understand apply function
// The apply method is very similar to call. the primary difference is in how additional arguments to the function are passed. the apply arguments are passed as an array. lets see an example

const phone = {
  printPhone: function (ram, color) {
    return (
      " This phone is called, " +
      this.name +
      "\n Manufactured by, " +
      this.manufacturer +
      "\nThis phone has :" +
      ram +
      "\nThe color of this phone is " +
      color
    );
  },
};

const iPhone = {
  name: "iPhone",
  manufacturer: "Apple",
};

console.log(phone.printPhone.apply(iPhone, ["16 gb ram", "Army green"]));

// additionally lets learn about bind method, same as before, but instead of calling the function immidiately it returns the function so that we can save it to  variable and call it later.

const savedFunction = phone.printPhone.bind(
  iPhone,
  "14 gb of ram",
  "Army blue"
);
console.log(savedFunction());
