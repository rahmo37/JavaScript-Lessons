// Lets create a function that takes a data and a callback parameter.

const { error } = require("console");

// This function processes the data, if the data variable has any content in it, then it passes that data to the callback function, if not content is provided, it passes a message to the call back that no data is provided
function doSomeThing(data, callback) {
  if (data) {
    callback(`you passed in ${data}`);
  } else {
    callback(`No data passed`);
  }
}

// Now when we call the doSome thing function, we pass in the data, and according to our input the method provides a result, which we later process, or just print.

doSomeThing("", (result) => {
  console.log(result);
});

// *--

// Asynchronous Behavior: Callback functions are often used in the context of asynchronous operations, like network requests, file operations, or timers.

// Now lets create a function that accepts callback function but, the callback function returns the result asychronously

function doSomeThingAsync(data, callback) {
  setTimeout(() => {
    callback(`the data you enter in the async function is ${data}`);
  }, 0);
}

doSomeThingAsync("Hello World", (result) => {
  console.log(result);
});

console.log("Hi");

// ! Explanation of the Async Behaviours

// setTimeout is Called:

// When the JavaScript engine encounters setTimeout, it sets up a timer. In your case, the timer is set to 0 milliseconds, but it's important to note that even with a timeout of 0, the callback function will not execute immediately.
// The callback function inside setTimeout (() => { callback(the data you enter in the async function is ${data}); }) is passed to the Web API (in the browser) or C++ APIs (in Node.js) and is queued to be executed after the specified delay.
// Event Loop:

// JavaScript has a single-threaded runtime, and the event loop facilitates the execution of asynchronous functions like those in setTimeout.
// The event loop checks the call stack to see if there's any running code. If the call stack is empty (meaning all synchronous code has finished executing), it will take functions from the callback queue (where your setTimeout callback is waiting) and push them onto the call stack to be executed.
// Execution of Synchronous Code:

// If there is synchronous code after the doSomethingAsync function call, it will execute before the setTimeout callback, even though the delay is set to 0 milliseconds. This is because the event loop will not push the setTimeout callback onto the call stack until the call stack is clear of all synchronous tasks.
// setTimeout Callback Execution:

// After all synchronous code has finished executing and the call stack is clear, the event loop pushes the setTimeout callback onto the call stack.
// The callback function inside setTimeout is then executed, calling your callback function with the data.

// *--

// Now you can make the callback to have multiple parameters
// Lets see it with another example,

function anotherDoSomething(data, callback) {
  if (data == 1) {
    // if data is 1, then other two parameters will be null
    callback(data, null, null);
  } else if (data == 2) {
    // if data is 2, then other two parameters will be null
    callback(null, data, null);
  } else {
    // if data is nothing, then other two parameters will be null
    callback(null, null, "not the number 1 or 2");
  }
}

anotherDoSomething("1", (num1, num2, num3) => {
  console.log(num1, num2, num3);
});

// *--

// lets handle error

function doSomethingAsyncWithErrorHandling(data, callback) {
  setTimeout(() => {
    if (data) {
      callback(null, `You entered ${data}`);
    } else {
      // Sending an Error object if the data is empty
      callback(new Error("No data provided"));
    }
  }, 1000);
}

doSomethingAsyncWithErrorHandling("", (err, res) => {
  if (err) {
    // If err is not null, printing the error message of the err object
    console.log(err.message);
  } else {
    console.log("Result:", res);
  }
});
