// Fisrt of all javaScript manages a sequence when executing lines of code.

// For example,

// lets say we have a function called
function print() {
  console.log("I am line 2");
}
// Now if we call the print() function in between ywo console.log it will call it in sequence, for example

console.log("I am line 1");
print();
console.log("I am line 3");

// Now lets introduce the setTimeout method
// It takes a function as its parameter
// Now recall that when you call a function inside another function's parameter, it is called the callback function
// It takes a second parameter, where you define the time in miliseconds. 1000 mili = 1 sec, so 2000 mili = 2 sec
// Now try to put it in between two console.logs and see what happens.

console.log("Line 1");

setTimeout(function () {
  console.log("Line 2");
}, 2000);

console.log("Line 3");

// The funciton that prints line 2 comes 2 seconds later.

//! Now the main point here is setTimeout is an asynchronus function

// Now JS first prioriteze the sychronized code then it executes the asynchronize code

// So now even if you put 0 as the second parameter for milisecond, it will first execute all the sychronized code then it will execute the asynchronized code, for example

setTimeout(function () {
  console.log("i am asynch function");
}, 0);

console.log("I am Sync code");

// We have another Async function called setInterval which set interval for a specified callback function meaning it will keep calling the function after a specific interval has passed.

// Observe these line of codes carefully,

// Seeting up an interval to log 'Hello' every 1 second
const intervalID = setInterval(() => {
  console.log("Hello");
}, 1000);

// Stops the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalID);
  console.log("Interval cleared!");
}, 5000);

// Interval is running rigth? it wasn't souppose to run the setTimeout() function, how will it clear the function above?

// well each async function is non-blocking in nature. both setInterval and setTimeout will start simultaneously, then effectively clearing the interval after 5 sec.

// Small description of what is happening...

// setInterval is called and starts its recurring execution almost immediately.
// Almost right after, setTimeout is set up to execute its callback after a 5-second delay.
// During those 5 seconds, the setInterval callback keeps firing every second.
// After the 5-second delay, the setTimeout callback is executed, which then clears the interval using clearInterval.

