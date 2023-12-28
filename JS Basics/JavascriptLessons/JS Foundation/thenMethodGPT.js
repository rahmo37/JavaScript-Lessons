// In JavaScript, the then method is most commonly associated with Promises. A Promise in JavaScript represents a value that may not be available yet but will be resolved or rejected at some point in the future. The then method is used to schedule actions to be executed when the Promise is resolved.

// The syntax for using then is:

// javascript

// somePromise.then(onFulfilled, onRejected);
// onFulfilled is a function that will be called if the Promise is resolved. The function will receive the resolved value as its argument.
// onRejected is a function that will be called if the Promise is rejected. The function will receive the reason for rejection as its argument.
// Here's a simple example:

// javascript
// Copy code
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!"); // the promise is resolved after 2 seconds
    // reject("Promise rejected!"); // you could also reject it
  }, 2000);
});

myPromise
  .then(
    (result) => { // onFulfilled
      console.log(result); // Output: "Promise resolved!"
    },
    (error) => { // onRejected
      console.log(error);
    }
  );
// You can also chain then methods to execute multiple operations in sequence. Each then can return a new value or Promise, and the next then's onFulfilled will receive that value:

// javascript
// Copy code
const myPromise1 = new Promise((resolve, reject) => {
  resolve(1);
});

myPromise
  .then((result) => {
    console.log(result); // Output: 1
    return result + 1;
  })
  .then((result) => {
    console.log(result); // Output: 2
    return result + 1;
  })
  .then((result) => {
    console.log(result); // Output: 3
  });
// If any then in the chain returns a Promise, the next then will wait for that Promise to resolve before executing:

// javascript
// Copy code
myPromise1
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result + 1), 1000);
    });
  })
  .then((result) => {
    console.log(result); // Output: 2
  });
// In modern JavaScript, you'll often find the async/await syntax used as a more readable alternative to .then(). However, understanding how then works is essential for understanding asynchronous operations in JavaScript