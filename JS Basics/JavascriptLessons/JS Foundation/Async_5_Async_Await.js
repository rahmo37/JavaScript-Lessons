//!  -------------------------------CODE TO RUN--------------------------------------

// we will understand the async in more detail, but lets first understand some fundimentals, notice the following code
// ! -------------------------------CODE TO RUN--------------------------------------
// async function returnNumber1() {
//   let value = await 123;
//   console.log(value, "<--");
//   return value;
// }
// console.log(returnNumber1());

// for (let i = 0; i < 500; i++) {
//   console.log(i);
// }
// ! -------------------------------CODE TO RUN--------------------------------------

// First of if an Async function is "INVOKED" (not passed as an argument) and there is no await keyword in its body or no async functionality inside an async function it will work as rgular sychronous function, without delaying any code inside the function. the only difference is it will still return a promise just like synchronous code, with a value if retured.

// However if there is await keyword inside the function in any point of the code, (Note!: that any sync code or non blocking code before the await keyword would still be treated as a regular sychronous code) all the code after the await key word will be paused, untill all the sync code runs.once all the sync code is done, codes after the await will execute.

//  Now here is the weried part, even though it would halt all the code after the await it would still return a promise like a sychronous code, which means all the code after the await is executed except at the same time it will still return a proimse, i mean come on man! they dont call JavaScript is weired for no reason!

// Explore further from here
// Now lets see what happens when called like this,

//!  -------------------------------CODE TO RUN--------------------------------------

// async function returnNumber2() {
//   let value = 123;
//   console.log(value, "<--");
//   return value;
// }

// returnNumber2().then(function (val) {
//   console.log(val);
// });

// console.log(456);
//!  -------------------------------CODE TO RUN--------------------------------------

// So, so far we've known that if there are no async functionality inside the async function it will run like a sync code. however The .then(), .catch(), and .finally() methods attached to a promise will always execute asynchronously, after the current synchronous code has finished executing.

// So even if there's no actual asynchronous work happening inside the async function, the callbacks you provide to .then(), .catch(), and .finally() will still be executed in the microtask queue (asynchronously) after all the current synchronous code runs.

// Now this has an await keyword in it
//!  -------------------CODE TO RUN--------------------------------------
// async function returnNumber2() {
//   let value = await 123;
//   console.log(value, "<--");
//   return value;
// }

// console.log(
//   returnNumber2().then(function (val) {
//     console.log(val);
//   })
// );

// console.log(456);
//!  -------------------CODE TO RUN--------------------------------------

// When returnNumber2() is invoked, it immediately encounters the await keyword. Even though you're "awaiting" a synchronous value (123), JavaScript will still treat it asynchronously. This means the function will pause its execution at this point.

// returnNumber2() immediately returns a promise in a "pending" state because of the async keyword. This promise isn't settled (i.e., neither resolved nor rejected) yet.

// Any synchronous code outside of the async function (but still in the main execution thread) will run. In this example, it means any code that's not inside the .then(...) or inside the async function after the await.

// After all the synchronous code has run, the event loop looks at the microtask queue to see if there's any pending task to run. The continuation of the returnNumber2() function after the await is one such task. This part of the function runs, logging 123 <-- and then resolving the promise with 123.

// Once the promise is resolved, any .then() chained to that promise will run. Here, it logs 123

// Now lets go with the flow
// Async keyword infront of a function, means this function is an Asychronous function, meaning the JS will treat this function as an async function.

// Now when a function has async infront of it, it will automatically return a promise. Even if you return a value from it it will be wrapped around with a promise.

//!  -------------------CODE TO RUN--------------------------------------

// async function returnNumber() {
//   return 123;
// }
// console.log(returnNumber());
//!  -------------------CODE TO RUN--------------------------------------

// Note that await can only be included in a async function, nowhere else.

// Now lets convert our enroll code script with await and async

const paymentSuccess = true;
const marks = 80;

function enroll() {
  console.log("Course enrollment in progrss");

  // Declaring a promise instance, instantiating it with Promis constructor, if payment is successfull then the resolve is sent, if not reject is sent with 'payment failed' as a string value
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment failed!");
      }
    }, 2000);
  });

  // finally we are returning that promise instance
  return promise;
}

function progress() {
  console.log("Course on progress...");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You could not get enough marks to get the cirtificate!");
      }
    }, 3000);
  });
  return promise;
}

function getCirtificate() {
  console.log("Prepareing your cirtificate!");

  // No condition is needed since we are just printing a congrats msg, no reject is needed as well since there are no condition that might be false.
  const promise = Promise.resolve("Congrats! You've got the certificate!");
  return promise;
}

// We will change this area

// We know that inside an async function we can use the await keyword

// The await keyword is used in JavaScript to pause the execution of an async function until a Promise is settled (either resolved or rejected), and to resume the execution of the async function after the promise settles. If the Promise is resolved, the value of the await expression is the resolved value. If the Promise is rejected, the await expression throws the rejected value.

async function course() {
  try {
    // First we call the enroll function and await its promis to be resolve either with resolve or rejected
    await enroll();
    // Then we go to the progress() function and await its promis to be resolved
    await progress();
    // After we recieve the promise from this function either resolved or rejected we call the getCirtificate function with the await keyword

    // if getCirtificate is resolved we know it returns a value, now we need to save that value in a variable;
    const value = await getCirtificate();
    // We can send this value wrapped around a promise object, and since every asycn function returns a promise, we call .then() method to call the onResolved callback function inside the .then() funciton
    return value;
    // if any promise rejects we need to catch that err, we cannot use any catch() or finally() method but we can use try catch, since if a promise rejected it directly throughs an err
  } catch (err) {
    console.log(err);
  }
}

course().then(function (value) {
  console.log(value);
});
