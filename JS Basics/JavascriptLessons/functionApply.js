// Almost similar to call() method. With apply you can write a method that can be used on different objects

// in call method we pass the argument as each individual value, but in the apply method we pass the arguments as an array, lets see an example

const animal = {
  animalDescription: function (sound, color) {
    return (
      "this is a " +
      this.catagory +
      " it's name is " +
      this.name +
      " color " +
      color +
      " it makes sound like, " +
      sound
    );
  },
};

const cat = {
  name: "Tom",
  catagory: "Cat",
};

// As you can see we passed an Array with two values
let description = animal.animalDescription.apply(cat, ["Meow", "White"]);
console.log(description);

// Using apply with the Math.max method
// We know that the Math.max method only takes values as its parameter not any array, but we can use the apply method to to pass an array, for example

// Recall what the syntax is for an apply / call method

// Object.method.apply(Object1, [array] / value);

// Now lets apply this on Math.max
// As for Object1 we just pass null, because we just want to pass the values bno object

//Lets define an array first

const numArr = [16, 5, 2, 7, 10];

let maxNum = Math.max.apply(null, numArr);
console.log(maxNum);

//! finally an important thing fact is,

//  If you pass a non-object (e.g., null, undefined, a number, a string), then this inside the function will be exactly that value in strict mode.

("use strict");

function checkThis() {
  // Checking the type of each This
  console.log(typeof this);
}

checkThis.apply(null); // Output: would output object if "use strict was defined at the top
checkThis.apply(42); // Output: would output number if "use strict was defined at the top
checkThis.apply("hello"); // Output: would output string if "use strict was defined at the top

// * Now its worth noting that apply() is often used with methods that are part of objects, but it can also be used with standalone functions. In JavaScript, functions are first-class objects, and methods like apply(), call(), and bind() can be invoked on any function, whether it's a method of an object or not.

// Also if a non object(null,undefined) is sent in the without the strict mode, the this is going to be a global or object depending on the environment context

//! Now note if you send any primitive type they would be wrapped in their correspending wrapper class, eventually making it an object

// Non-strict mode

function checkThis1() {
  console.log(this === globalThis); // In a browser, you could use `window` instead of `globalThis`
}

checkThis1.apply(null); // Output: true
checkThis1.apply(undefined); // Output: true
checkThis1.apply("hello"); // Output: false
