// A simple project with callback and async methods

const paymentSuccess = true;
const marks = 80;

function enroll(callback) {
  console.log("course enrollment is in progress");

  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("Payment Failed!");
    }
  }, 2000);
}

function progress(callback) {
  console.log("Course on progress...");
  setTimeout(function () {
    if (marks >= 80) {
      callback();
    } else {
      console.log("Your marks are not satisfactory!");
    }
  }, 3000);
}

function testng() {
  console.log("Testing...");
}

function getCirtificate(callback) {
  console.log("Cirtificate Printing");

  setTimeout(function () {
    callback();
    console.log("Congratulation! Well Done!");
  }, 3000);
}

// Correct way

enroll(function () {
  progress(function () {
    getCirtificate(testng);
  });
});

// Wrong Way

// enroll(progress);
// progress(getCirtificate);

// Read this to understand the Async execution

// OKay what is happening here?

// First enroll(progress) is called and the "course enrollment is in progress" is printed out.

// Second The setTimeout inside the enroll schedules its callback for 2 seconds later, but immediately after setting that up, it continues executing the next lines of the main code.

// Third progress(getCirtificate) is called and "Course on progress..." is printed

// Fourth setTimeout inside the progress schedules its callback for 3 seconds

// Fifth two seconds after starting, the setTimeout from enroll finishes its wait. Now since paymentSuccess is true, it calls its callback, which is progress

// Sixth, progress callback inside the enroll runs and prints course on progress again

// Seventh, The setTimeout inside the progress callback sets for another 3 seconds.

// Eighth, one second after that the setTimeout from the direct progress call finishes its wait. Since marks is 80 or higher, it calls its callback, which is getCirtificate and prints "Cirtificate Printing" and "Congratulation! well done!" is printed immidiately after.

// finally, two second after that (A total of 5 second from the beggining) the setTime out from the progress callback function which was first initiated from enroll function,tries to call the callback function inside the progress(since marks is still 80 or higher),but fails to execute! because when progress function was provided in the enroll function no callback was given to the progress function which it expects, Thats everything

// ! Note that, Even if you have an asynchronous function, like a setTimeout set to execute its callback in, let's say, 2 seconds, if your synchronous code takes 10 seconds to complete, the callback from the setTimeout will not get executed until after those 10 seconds.
