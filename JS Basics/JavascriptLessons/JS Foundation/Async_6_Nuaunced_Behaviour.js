// 1. Invocation of Async Functions Without await
// In this scenario, an async function does not contain any await expressions or asynchronous operations. It behaves like a synchronous function but still returns a promise.

// javascript
// Copy code
async function noAwaitInside() {
    console.log("1. Inside the async function");
    return "Finished";
}

console.log("Before calling async function");

noAwaitInside().then(result => console.log(`3. ${result}`));

console.log("After calling async function");



// Output:

// javascript
// Copy code
// Before calling async function
// 1. Inside the async function
// After calling async function
// 3. Finished
// Even though noAwaitInside is an async function, it runs immediately when called because there's no await pausing its execution. However, it still returns a Promise, allowing .then() to be used to handle the returned value.

// 2. Presence of await Inside Async Functions
// Here, the use of await inside an async function changes how code is executed. Code before await runs synchronously, while code after await waits until the Promise resolves.

// javascript
// Copy code

//! async function withAwait() {
//     console.log("1. Before await");

//     const result = await new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("2. Inside the promise");
//             resolve("Promise resolved");
//         }, 1000); // simulate async operation, e.g., fetching data
//     });

//     console.log(`3. After await: ${result}`);
// }

// console.log("Before calling async function");
// withAwait();
// console.log("After calling async function");
// Output:

// javascript
// Copy code
// Before calling async function
// 1. Before await
// After calling async function
// 1 second pause
// 2. Inside the promise
// 3. After await: Promise resolved
// await pauses withAwait's execution at the promise until it resolves, but doesn't block the main thread, allowing "After calling async function" to print immediately. Once the promise resolves, execution inside withAwait resumes.

// 3. Execution and Promise Return
// This concept emphasizes that an async function returns a Promise immediately, regardless of any await used inside, and the promise settles once the function completes its execution.




// javascript
// Copy code

// !async function asyncOperation() {
//     const value = await new Promise((resolve) => setTimeout(() => resolve(42), 1000));
//     return value;
// }

// console.log("Before async call");

// asyncOperation().then(result => {
//     console.log(`Result: ${result}`);
// });

// console.log("After async call");




// Output:

// vbnet
// Copy code
// Before async call
// After async call
// // 1 second pause
// Result: 42
// asyncOperation returns a Promise immediately, allowing the "After async call" message to be printed before the async operation inside asyncOperation completes. Once the operation completes and the promise inside asyncOperation resolves, the .then() block executes, showing the async function's result.

// These examples illustrate how async functions and the await keyword enable handling asynchronous operations in a way that can mimic synchronous code flow, improving readability and maintainability while still being non-blocking and efficient.