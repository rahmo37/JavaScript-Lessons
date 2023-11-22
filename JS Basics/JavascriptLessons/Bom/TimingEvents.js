// The window object allows execution of code at specified time intervals.
// These time intervals are called timing events

// There are two key methods, i studied these methods before

// setTime out method takes two parameters, one is for entering the callback function and one is for, how much time, the function should wait before execution

// setTimeout(callbackFunction(), timeToWait);

// setInterval is another method that will execute a call back function after every 'given time'

// in other words, if you provide a callback function in the first and a time in the second parameter, the callback function will keep executing over and over after the given time

// Lest see some demonstration of two functions

const timeout = document.getElementById("timeout");
const interval = document.getElementById("interval");

let timeOutInstance;
let intervalInstance;
let startTime;
let endTime;

function startTimeout() {
  let second = Number(prompt("How long to wait (in second): ") + "000");
  startTime = new Date();
  timeOutInstance = setTimeout(() => {
    console.log(startTime);
    timeout.innerHTML = `${second.toString().slice(0, 1)} seconds passed!`;
  }, 3000);
}

// At first i am saving the timeout method i called before in a variable, so that i can use that variable to clear that time out later

// The "weird numbers" you are seeing when you print timeOutInstance are actually the IDs of the timer created by the setTimeout function in JavaScript. Whenever you use setTimeout (or setInterval, for that matter), JavaScript creates a timer and assigns it a unique numerical ID. This ID can be used to reference or clear the timer later if needed, with functions like clearTimeout.
console.log(timeOutInstance);

// now clearTimeout method clears a timeout instance before the actual time is over

// Additionally we are captering the time passed when we pressed the stop timeout
function stopTimeout() {
  clearTimeout(timeOutInstance);
  endTime = new Date();
  let timePassed = (endTime - startTime) / 1000;
  timeout.innerHTML = `timeout instnace stopped ${timePassed} sec`;
}
let second = 0;

// The interval method executes a function after a defined period of time
function startInterval() {
  intervalInstance = setInterval(function () {
    second += 1;
    interval.innerHTML = `${second} sec passed`;
  }, 1000);
}

// On the other hand stop interval function stops an interval, you just have to pass the actual interval instance in the function
function stopInterval() {
  clearInterval(intervalInstance);
}
