// What is Promis? Promins means some pre-defined statement that need to be kept after a condition is met, If not the promise is not fulfilled

// In a real world scenario, "If you pay the enrollment money i will enroll you in this course"

//  First lets go back to the previous example again
let paymentSuccess = true;
let marks = 80;

function enroll(callback) {
  console.log("Enrollment is in progress!");
  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("Payment failed!");
    }
  }, 3000);
}

function progress(callback) {
  console.log("Course in progress!");

  if (marks >= 80) {
    setTimeout(function () {
      callback();
    }, 3000);
  }
}

function getCirtificate() {
  console.log("Cirtificate printing!");
  setTimeout(function () {
    console.log("Congratulation!!!");
  }, 3000);
}

enroll(function () {
  progress(getCirtificate);
});

// In this example we only have 2 callbacks, what if we had more callback functions and async fuctions inside them, we'd have to make more nested callbacks, notice this syntax below;

// enroll(function () {
//   progress(function () {
//     getCirtificate(function () {
//       A(function () {
//         B(function () {
//           C(function () {
// And so on! Console.log("Call Back Hell");
//           });
//         });
//       });
//     });
//   });
// });

// This is called a callback hell

// To address this issue we use the promis syntax,

// The main idea is, like this in plain english,
// If your payment is successfull i promis the course will progress, then, if you marks is more than 80 i promis you will get the certificate and so on

// Now lets say that we have 3 tasks, 1 2 and 3.

// Task 2 takes 2 second to complete, and on the other hand 1 and 3 completes immidiately

const status = true;

console.log("Task 1");

// We are using this like a callback right (in the below syntax)?
// but we know the downside, if we had more tasks just like task 2, we'd have to create more callback function like this, and that would result in callback hell
// setTimeout(function () {
//   if (status === true) {
//     console.log("Task 2");
//   } else {
//     console.log("failed");
//   }
// }, 2000);

// But we can simplify this with promises
//  Lets create a promis instance
// Now this promis instance takes a callback function and on that function it returns a resolve and a reject argument, resolve means that the promis was kept and reject means the promis was not ketp or false
const promise = new Promise(function (resolve, reject) {
  // We are placing the setTimeout function inside our promis instance, now its saying if status variable is true than then send the resolve function with the value "task 2" and if it fails send reject with the value "failed"

  // notice the whole syntax inside the new Promise parantheses is working like a declaration , and we are saving this promis declaration inside an instance called promise

  // Basically inside the promis declaration we do some async work such as netwrok call, or maybe some other time heavy task, if successfull we return resolve and if failed we send reject
  setTimeout(function () {
    if (status) {
      resolve("task 2");
    } else {
      reject("failed");
    }
  }, 2000);
});

// So all in all we just instantiated an instance of the Promise object and provide its value

// Notice it is not executed yet. We just saved the Promise inside a promise instance

//  Lets execute
// If the the promis was kept, the code block inside the then is executed, if failed .catch is executed
// value and err are the values we passes in the promise declaration.
promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });

console.log("Task 3");

// Now lets see another syntax,
// let say we have another instance of promise, which does similar work
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (status) {
      resolve("task 4");
    } else {
      reject("failed");
    }
  }, 3000);
});

// You can use the then fuinction to handle both the error and the fullfilment lets see
// Syntax then.(onFullfilled, onReject);

promise2.then(
  function (value) {
    console.log("promis was fullfilled with: ", value);
  },
  function (error) {
    console.log("Promis was rejected with: ", error);
  }
);

// In that case catch is not needed

//! Up to this point, below is the explanation of what is happening in the sync and async code, please reviwe this,

// In JavaScript, the execution is single-threaded, which means that only one piece of code is executed at a time. When you use asynchronous functions, like setTimeout, the execution isn't halted. Instead, the timer starts, and the JavaScript engine continues executing the rest of the synchronous code.

// When the timer's duration is complete, it doesn't mean that the callback gets executed immediately. Instead, the callback gets pushed to a task queue (or the event queue). The JavaScript event loop will only pull a task from this queue when the main execution stack is empty.

// Now, let's break down the order of the above code:

// enroll is called.

// "Enrollment is in progress!" gets printed immediately.
// A setTimeout is scheduled for 3 seconds later inside enroll.
// While waiting for the enroll's setTimeout, the synchronous code continues.

// "Task 1" is printed.
// promise is defined. Inside this promise, there's a setTimeout for 2 seconds.
// "Task 3" gets printed.

// promise2 is defined. Inside this promise, there's a setTimeout for 3 seconds.

// Up to this point, you have scheduled three setTimeouts:

// One from enroll for 3 seconds.
// One from promise for 2 seconds.
// One from promise2 for 3 seconds.
// After 2 seconds, the setTimeout inside promise completes first (since it was just 2 seconds). Its callback is placed on the event queue.

// This callback resolves the promise, so "task 2" gets printed due to the .then.
// After 3 seconds from the start (1 second after the last log), both setTimeout callbacks from enroll and promise2 are ready to be executed. However, since the enroll's setTimeout was scheduled first, its callback is first in the queue and gets executed before promise2's callback.

// "Course in progress!" gets printed from within progress function.
// Another setTimeout is scheduled inside progress for 3 seconds.
// Then the setTimeout from promise2 gets its turn, and it logs "Promis was rejected with: failed" due to the .then.

// Finally, after 3 more seconds, the last setTimeout inside progress completes.

// "Cirtificate printing!" and "Congratulation!!!" are printed.

// We have two static methods for promise

// Promis.all
// Accumulates multiple promises and then shows their result with an array
Promise.all([promise, promise2]).then((res) => {
  console.log(res);
});

// Another static method is Promise.race
// Accumulates multiple promises and then which ever promise is resolved first, it's value is returned.

Promise.race([promise, promise2]).then((res) => {
  console.log(res, "Was resolved first");
});
