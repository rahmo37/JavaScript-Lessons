// The code inside a JS function will execute when something invokes it

// The code inside a function is not executed when the function is defined

// JS functions can be invoked without being called. Dont know what that mean yet but will learn very soon

// Lets define a function

function myFunction(a, b) {
  return a * b;
}

console.log(myFunction(10, 2));

// This function above does not belong to any object. But in JS there is always a default global object

// In HTML the default global object is the HTML page itself, so the function above belongs to the HTML page

// In a browser the page object is the browser window. The function above automatically becomes a window function, so myFunction and the window.myFunction are the same function.

// In a browser environment, the global context is the window object. Any variable or function declared outside of a function or block scope is attached to the window object, making it globally accessible.

// Since this function is declared at the global level (it's not inside another function or block), it is attached to the window object in a browser environment.

console.log(window.myFunction(10, 2));

// The This keyword,
// In JS the thing called this, is the object that "owns" the current code
// The value of this, when used in a function, is the object that "owns" the function

// Lets define a function outside and then inside an object's body

function outside() {
  console.log("I am the property of ", this);
}

const anyObj = {
  name: "Any",
  inside: function () {
    console.log("I am the property of ", this);
  },
};

outside(); // Window object owns the outside function
anyObj.inside(); // anyObj function owns the inside function

function TestConstructor(name, address) {
  this.name = name;
  this.address = address;
  console.log(this);
}
TestConstructor(); // Outputs Window

const testObj = new TestConstructor("", ""); // Returns the constructor function it self
