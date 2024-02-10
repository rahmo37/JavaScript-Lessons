// *Assignment5:
// ?related to JS Foundation folder, object.js and JS object in w3Schools

// In this assignment, you will apply your knowledge of JavaScript objects, properties, methods, and data types to build a simple car dealership management system. This system will allow you to manage car inventory, including adding new cars, updating car details, and displaying information about the cars.

// !--------------------------------------

// !Part 1: Understanding Basic Object Structure
// ?Task 1.1: Create a JavaScript object named car1 representing a car, with properties for brand, model, color, and year. Initialize these properties with values of your choice.
// ?Task 1.2: Write a function named displayCarInfo that takes a car object as a parameter and logs its details to the console.

// Lets first define car object. its best to define the object as constant, so this object wont be pointed to any other object
const car1 = {
  carName: "Tesla",
  carModel: "Model Y",
  color: "blue",
  year: "2019",
};

// Then we are using the for in loop to iterate through the keys in the car object
function displayCarInfo(car1) {
  for (key in car1) {
    console.log(car1[key]);
  }
}

displayCarInfo(car1);

// !--------------------------------------
// !Part 2: Advanced Object Properties and Methods
// ?Task 2.1: Enhance the car object by adding a method startEngine that logs "Engine started" to the console.
// ?Task 2.2: Add a method updateColor to the car object, which takes a new color as a parameter and updates the car's color.

// !when you save a function in a variable, the phenomenon is called a "function expression." This is when a function is created and assigned to a variable. The function can then be invoked using the variable name as if it were the function name

// Adding function in the car1's startEngine function.
car1.startEngine = function () {
  console.log("car engine started!");
};

car1.updateColor = function (color) {
  this.color = color;
  console.log("New color of the car is,", this.color);
};

car1.startEngine();
car1.updateColor("Green");
console.log(car1.color);

//* Bonus
// Lets add a property in the car object which is going to be constant, we use the Object.definePropert method

Object.defineProperty(car1, "CAR_TYPE", {
  value: "Sedan",
  writable: false, // Prevents the property from being rewritten
  enumerable: true, // Allows the property to be listed enumaration (While iteration)
  configurable: false, // prevents the property from being removed or changed to writable
});

console.log(car1.CAR_TYPE);

// Trying to overwrite the property will have no effect if strict mode is not enabled
car1.CAR_TYPE = "Truck";
console.log(car1.CAR_TYPE); // Sedan

// !--------------------------------------
// !Part 3: Working with Multiple Objects
//? Task 3.1: Create an array named carInventory to hold multiple car objects.
//? Task 3.2: Add car1 to carInventory and create at least two more car objects with different details, adding them to carInventory.

// Creating a casInventory array
const carInventory = [];

// pushing the car1 object inside the carInventory array
carInventory.push(car1);

// lets create two more car object and push them in the array as well
const car2 = {
  carName: "BMW",
  carModel: "X",
  color: "blue",
  year: "2022",
};

const car3 = {
  carName: "Audi",
  carModel: "R8",
  color: "Black",
  year: "2022",
};

carInventory.push(car2);
carInventory.push(car3);

// !--------------------------------------
// !Part 4: Using this Keyword
//? Task 4.1: Modify the displayCarInfo function to use the this keyword to access the car's properties.
//? Task 4.2: Inside the car object, add a new method carDetails that uses this to return the car's details as a string.

// Since the function displayCarInfo is not a part of the car1 object, we will not be able use the this keyword directly to it,

// However we can use the .call() function to provide an object to displayCarInfo, and the context of that function will be changed and the this will refere to the pass in car object

// The call() function in JavaScript calls a function with a specified this value and individual arguments, allowing you to control the context in which the function is executed.

function displayCarInfo() {
  console.log(`Car Name: ${this.carName}`);
  console.log(`Car Model: ${this.carModel}`);
  console.log(`Color: ${this.color}`);
  console.log(`Year: ${this.year}`);
}

// now we can pass any object in the function, and it's context will change
displayCarInfo.call(car1);
displayCarInfo.call(car2);
displayCarInfo.call(car3);

// Adding a function in car1 object that prints the detail of a car using this keyword
car1.carDetails = function () {
  return (
    "The name of the car is " +
    this.carName +
    " The model of the car " +
    this.carModel +
    " The color of the car is " +
    this.color +
    " The year of the car " +
    this.year +
    " The car type is " +
    this.CAR_TYPE
  );
};
console.log(car1.carDetails());

// !--------------------------------------
// !Part 5: Understanding JavaScript Data Types
// ?Task 5.1: Demonstrate the difference between primitive and object data types. Create a string using let str = "Hello" and another string using let objStr = new String("Hello"). Use typeof to show the difference.
// ?Task 5.2: Explain why it's generally a bad practice to create strings, numbers, and booleans as objects.

// Primitive vs Object

// Primitive datatypes include undefined, null, boolean, number, string, BigInt and sumbol. The types represent a signle value and are immutable. they are stored directly in the location the variable access

// Object datatypes, however, are collections of data. They can represent multiple values and can be altered. Objects are stored as a reference. wchich means the variable dosen't contain the object itself, but rather a reference to it. This catagory includes objects, arrays functions and more complex entities

// !In programming, when a data type is described as "immutable," it means that once a value of that type is created, it cannot be altered. In JavaScript, this applies to primitive types like numbers, strings, and booleans. For example, if you create a string in JavaScript, you cannot change the characters within that string. Any operation that appears to modify it actually creates a new string. This contrasts with mutable types, like objects and arrays, where the contents can be changed after creation

// Each data type can be created with primitive type and its object type.
// lets take string for an example, it can be created as a primitive or as an object

let str = "Hello world";
let str2 = new String("Hello world");

console.log(typeof str, typeof str2); //String Object

// * --

// Usually it is bad practice to declare datatype with their Object types because, they creat unecessary overhead. and they refere to prototype object wich leaks unecessary memory, here is a bit more explanation

// Performance Overhead: Object types consume more memory and processing power than their primitive counterparts. This overhead can impact the performance of your application, especially when handling large amounts of data.

// Comparison Issues: Object types can lead to unexpected behavior during comparisons. For example, comparing two objects that represent the same value might yield false because they are different instances.

// Prototype Chain: Objects in JavaScript have a prototype chain, which can lead to additional memory usage and complexity, especially if not managed properly.

// ! a weired sidenote
// !Numbers: They are primitive values and part of the core language. Numbers don't occupy memory in the way objects or strings do when assigned to variables. They exist as fundamental data types that can be used by any variable.

// !Strings: When a string is assigned to a variable, it occupies memory. If you reassign the variable to a different string, the original string becomes orphaned if there are no other references to it. This orphaned string is then subject to garbage collection, which means it can be cleared from memory by the language's runtime environment to free up space.

// !--------------------------------------
// !Final Project: Car Dealership System
// ?ask 6.1: Create a function addCarToInventory that takes car details, creates a new car object, and adds it to carInventory.
// ?Task 6.2: Implement a function findCarByModel that searches carInventory for a given model and returns the car object if found.
// ?Task 6.3: Create a function updateCarModel that takes a car's brand and a new model, finds the car in the inventory, and updates its model.

// The readline module in Node.js is used to read input from the user, line by line, through the console. It's useful for creating command-line interfaces. With readline, you can prompt users for input, handle their responses, and manage input history. It works by attaching to a readable stream like process.stdin and emits an event each time a new line is entered, allowing the application to process the input interactively.

// the term "interface" refers to a means of interaction between the user and the Node.js program. The readline module allows the program to read user input line by line from the console, enabling a two-way communication

const readline = require("readline");

// *--

// Create an interface for input and output, The readline.createInterface method in Node.js returns an Interface object. This Interface object is an instance of the EventEmitter class, which allows it to emit events that your program can listen to and respond to. The most commonly used events are:
// line: Emitted whenever the input stream receives an end-of-line input (like \n or Return).
// close: Emitted when the readline Interface is closed.

const rl = readline.createInterface({
  // Inside readline.createInterface({ ... }):

  //createInterface method of Node.js's readline module, you provide an anonymous object (also known as an object literal) with two properties: input and output. This object configures where the readline interface will read data from (input) and where it will write data to (output).

  // input: This is typically set to process.stdin, which represents the standard input stream (like keyboard input in console).
  // output: This is commonly set to process.stdout, representing the standard output stream (like console output).

  input: process.stdin, // stands for "standard input.
  output: process.stdout, // stands for "standard output.

  // The process object in Node.js is a global object that provides information about, and control over, the current Node.js process. As a global object, it can be accessed from anywhere in a Node.js application without requiring an import. The process object has several properties and methods, two of which are .stdin and .stdout:
});

// *--

// *In JS if you are defining an object literal and the property name is same as the variable name for its value, you can use the shorthand property name syntax. in below code both the parameter name (valriable name) and the property name in the object are same, therefore you could use the shorthand syntax, where we directly provide the prameter name to be read as the key and its value

// Defining the addCarToInventory() method
function addCarToInventory(carName, carModel, color, year) {
  carInventory.push({
    carName,
    carModel,
    color,
    year,
  });
}

addCarToInventory("Toyota", "Highlander", "Black", "2022");

console.log(carInventory);

// *--
// When using the question method of the rl object from Node.js's Readline module, you prompt the user with a question you've defined. This method takes two parameters: the question string and a callback function. The callback function receives the user's input as its parameter, allowing you to process this input as needed.

// It's important to note that the question method operates asynchronously. This means that the user's input must be processed within the callback function. Attempting to use the input synchronously outside of this callback could lead to conflicts due to the asynchronous nature of the method.

function findCarByModel() {
  rl.question("Please enter the model: ", (inputModel) => {
    let foundCar = null;

    for (let carObject of carInventory) {
      if (
        inputModel.toLocaleLowerCase === carObject.carModel.toLocaleLowerCase
      ) {
        foundCar = carObject;
        break;
      }
    }

    if (foundCar) {
      console.log("Car found:", foundCar);
    } else {
      console.log("Car not found");
    }

    // Close the readline interface
    rl.close();
  });
}

// findCarByModel();

// *--

function updateCarModel(callback) {
  rl.question("Please enter the brand: ", (inputBrand) => {
    // The .find() method in JavaScript is used to search for an element in an array that satisfies a specified testing function. It returns the value of the first element in the array that passes the test. If no elements pass the test, it returns undefined. in this case the array element is a car object
    let foundCar = carInventory.find(
      (carObject) =>
        carObject.carName.toLocaleLowerCase() === inputBrand.toLocaleLowerCase()
    );

    if (foundCar) {
      rl.question("Enter new model: ", (newModel) => {
        foundCar.carModel = newModel;
        rl.close();
        callback(foundCar); // Use a callback to handle the result
      });
    } else {
      rl.close();
      callback("Car not found"); // Use a callback to handle the result
    }
  });
}

// Usage
updateCarModel((result) => {
  console.log(result);
});

// ! A detailed explanation of what is happening underneath (Important)
// To understand how the updateCarModel function works internally, especially in the context of Node.js's event loop and asynchronous operations, we need to delve into the details of JavaScript execution, the event loop, and Node.js's I/O operations. Here's a step-by-step breakdown:

// Initial Setup
// Function Invocation:
// When updateCarModel is called, Node.js starts executing its code. The initial call to rl.question to ask for the car brand is placed on the call stack.
// Asynchronous I/O with rl.question
// Asynchronous Input Request:

// rl.question is an asynchronous function that interfaces with the system's I/O to get user input. This function does not block the Node.js event loop. It requests input and then, internally, Node.js uses its background I/O mechanisms (libuv library) to wait for this input without blocking the main thread.
// Event Loop and Callback Queue:

// While waiting for user input, the event loop continues running. If there are any other tasks or timers set to run, they will be processed. The callback provided to rl.question won't be called until the event loop gets to it, which only happens after the user enters their input and presses enter.
// User Inputs Brand
// Handling User Input:
// Once the user inputs a brand and presses enter, the rl.question callback is placed in the callback queue. The event loop, upon finding the call stack empty, moves this callback to the call stack and executes it.
// Processing and Second Asynchronous I/O
// Finding the Car and Second rl.question:
// Inside this callback, .find() is used to search carInventory, which is a synchronous operation and happens immediately.
// If a car is found, another rl.question is called to ask for the new model. This is again an asynchronous operation, and the process repeats: waiting for input, placing the callback in the queue, and executing it when ready.
// Updating the Model and Concluding the Operation
// Updating the Car Object:
// Once the user enters the new model name, the corresponding callback updates the foundCar object and closes the readline interface. This again involves the event loop processing the callback after the input is received.
// Callback Execution
// Final Callback:
// The last action is to call the callback function passed to updateCarModel. This could be a simple console log or any other operation defined outside updateCarModel.
// Event Loop Throughout the Process
// Continual Checking: The event loop continuously checks if there are events (like I/O operations) that have completed and callbacks that need to be executed.
// Non-Blocking Nature: Throughout this process, the event loop allows Node.js to perform other tasks, if any, and not get blocked by the I/O operations. This is key to Node.js's asynchronous, non-blocking behavior.
// Summary
// In summary, the updateCarModel function's flow involves asynchronous I/O operations for user input, with callbacks being queued and executed in response to these inputs. The Node.js event loop plays a crucial role in managing these operations, ensuring that the application can continue running other tasks while waiting for user input. This is a fundamental aspect of how Node.js handles asynchronous operations efficiently.

// !--------------------------------------
// !Submission
// Submit all your code, along with comments explaining your logic. Ensure that each part of the assignment is clearly separated and labeled for easy understanding.
