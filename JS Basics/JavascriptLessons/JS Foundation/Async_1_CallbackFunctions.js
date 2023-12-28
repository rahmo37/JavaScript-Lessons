// I will callback Later
// A callback is a function passed as an argument to another function

// This technique allows one function to call another function

// A callback function can run after another function has finished

//! We know this alerady that functions in JS are executed in the sequence they are called. not in the sequesnce they are defined.
// For example,

function first() {
  console.log("Hey! I am first!!!");
}

function second() {
  console.log("I am second");
}

second();
first();

// Though the function first was defined before function second, second() function is executed first because it was called first

//! Sequence Control
// Sometimes you want to have a better control over when to execute a function
// Suppose you want to do a calculation, and the display the result

// You could call a calculator function (myCalculator), save the result, and then call another function (displayResult) to display the result.

// This function displays the result
function displayResult(result) {
  console.log(result);
}

// This function calculates two number
function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 10);
displayResult(result);

// Or you could do this another way which is, the calculator function will call the display function automatically the display function

// for example
function displayResult2(result) {
  console.log(result);
}

function myCalculator2(num1, num2) {
  let sum = num1 + num2;
  displayResult2(sum);
}

myCalculator2(10, 20);

// The problem with the first example above, is that you have to call two functions to display the result.

// The problem with the second example, is that you cannot prevent the calculator function from calling the display2 function, you have no control from the outside of the function

//! JavaScript Callbacks

// A callback is a function passed as an argument to another function

// Using a callback, you could call the calculator function (myCalculator3) with a callback, and let the calculator function run the callback after the calculation is finished

// Same as before
function displayResult3(result) {
  console.log(result);
}

//same as before, but now it will take an extra parameter, where it will call a function
function myCalculator3(num1, num2, callbackFunction) {
  let sum = num1 + num2;
  callbackFunction(sum);
}

// Note that when we can passing the displayResult3 in this function we are not calling it, we are just passing the function as an argument, inside the myCalculator3 we are actually calling the displayResult3 function, the argument's name changed to callbackFunction inside the myCalculator3 function
myCalculator3(20, 40, displayResult3);

// now you can control wheather to display the callbackfunction inside the my calculator function or not

// Same as before
function displayResult4(result) {
  console.log(result);
}

//same as before, but now we will check if the parameter contains a function or not, if not, we dont call it,and return the sum, if yes we call the callbackFunction
function myCalculator4(num1, num2, callbackFunction) {
  let sum = num1 + num2;

  // Checks if the callbackFunction is one of the falsy values such as (null, undefined, 0, "", NaN, or false)
  if (callbackFunction) {
    callbackFunction(sum);
  } else {
    return sum;
  }
}

// Note that when we can passing the displayResult3 in this function we are not calling it, we are just passing the function as an argument, inside the myCalculator3 we are actually calling the displayResult3 function, the argument's name changed to callbackFunction inside the myCalculator3 function

// now you can either display the result or save the returned value in a variable and then display it

myCalculator4(40, 80, displayResult3);
let result2 = myCalculator4(80, 160);
console.log(result2);
// now you are using one same method but in different ways
