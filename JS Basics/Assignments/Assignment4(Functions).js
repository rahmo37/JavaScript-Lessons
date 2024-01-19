// *Assignment4:
// ?related to JS Foundation folder, function,js and function part in w3Schools

// !Tasks:

// !Basic Function Declaration and Invocation

// ?Write a function named multiply that multiplies two numbers and returns the result.
// ?Invoke this function with two arguments and store the result in a variable. Display the result.

// A multiply method that multiplies two numbers and returns the result
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

let result = multiply(5, 10);
console.log(result);

// !--------------------------------------------

// !Understanding Parameters and Arguments

// ?Create a function greet that takes a name as a parameter and returns a greeting message.
// ?Invoke this function with a name and display the greeting.

// A greeting function that takes an name adds a greeting message to it and returns the whole message

function greeting(name) {
  return "Hello " + name;
}

console.log(greeting("Arnob"));

// !--------------------------------------------

// !Function Return Values

// ?Write a function calculateArea that takes the radius of a circle as a parameter and returns its area.
// ?Call this function and display the area of a circle with a specific radius.

// we need the radius to find the Area of a circle, the Area of a circle is PI * r^2

function calculateArea(radius) {
  return Math.PI * radius ** 2;
}

console.log(
  "The Area of the circle with the radius 5 cm: " + calculateArea(5).toFixed(2)
);

// Side note if the diameter was given, we half the diameter to get the radius

// !--------------------------------------------

// !Function Invocation Variations

// ?Demonstrate the difference between invoking a function with its parameters, without parameters, and only referencing the function without parentheses. Use the greet function for this task.

// Invoking a function and referencing a function are different concepts in JavaScript, and how we call/invoke the function (with or without parameters) changes its behaviour. lets use the greet function above as an example, to demonstrate these differences,

// The greet function above accepts a parameter called name, now depending on wheater we provide a parameter to or not will change its behaviour

console.log(greeting("Obaedur Rahman")); //Since we've passed a parameter it is greeting the name.

// On the otherhand if we'd call it without parameters, it would greet undefined
console.log(greeting());

// now we could also use it as a reference saving its fuction body in another variable.
const greetingPeople = greeting; //notice here we did not use the parantheses. therefore JS issaving its body in the greetingPeople variable.

// However now when we use the variable to call the function we use parantheses
console.log(greetingPeople("Zarin Rafa"));

// Notice just printing without the paranthese will just print the function body not invoke it
console.log(greeting);

// !--------------------------------------------

// !Functions as Variable Values

// ?Create a function toFahrenheit that converts Celsius to Fahrenheit.
// ?Instead of storing the return value in a variable, use the function directly in a template string to display the result.

// We can use a function just like a variable, in a template string we can add various variables to be appended or in the middle, similarly we can use results retured from a function as well

// our function takes a celcius as a parameter

// The formula for converting celsius to Fahrenheit is C * (9 / 5) + 32

let celcius = -6;

function toFahrenheit(celcius) {
  return celcius * (9 / 5) + 32;
}

console.log(`${celcius} C° is ${toFahrenheit(celcius)} F°`);

// This formula efficiently returns the fahrenheit

// !--------------------------------------------

// !Local Variables Scope

// ?Write a function carDetails that declares a local variable carName, assigns it a value, and returns it.
// ?Try to access carName outside of the function to demonstrate the scope of local variables.

// A local variable in the context of functions, is when a variable is declared inside of a function block

// Lets define a variable inside a function
function carDetails() {
  let carName = "Mazda";
  console.log(carName);
  return carName;
}
carDetails();
// we have defined carName inside a function however we will not be able to access it outside of the function scoped

// console.log(carName); // Throws an error, ReferenceError: carName is not defined

// Note that global variables (variables that are not defined in any block), can be accessed in a function

// !--------------------------------------------

// !Function with Local Variables

// ?Create a function compareNumbers which takes two numbers as parameters, declares a local variable inside the function to store the larger number, and returns it.

// Creating a function that has a local variable, and it saves the larger number in itself

function compareNumbers(num1, num2) {
  let largerNumer = num1 > num2 ? num1 : num2;
  return largerNumer;
}

console.log(compareNumbers(15, 10));

// !--------------------------------------------

// !Multiple Functions with Same Variable Name

// ? Write two different functions, each declaring a variable with the same name (e.g., result). Demonstrate that these are treated as separate variables in each function.

// We can have different function each with a same named variable variable

function func1() {
  let funcVar = "Function";
  return funcVar;
}

function func2() {
  let funcVar = "Function";
  return funcVar;
}

console.log(func1(), func2());

// Both function has the same variable name but still they are working fine, proving that each variable is function scoped

// !--------------------------------------------

// !Function Without Return

// ?  Write a function displayMessage that prints a message to the console but does not return a value. Discuss what happens if you try to store the function's return value in a variable and display it.

// The function below displays a message but does not return anything.
function displayMessage() {
  console.log("Hello World!");
}

// But if we try to stroe the function's value in a variable it would return undefined, because a function if it does not explicitly return anything it will return undefined.

let rslt = displayMessage();

console.log(rslt); // undefined
// !--------------------------------------------

// !Creative Challenge

// ? Create a small program that uses multiple functions to solve a problem, such as a basic calculator or a simple interactive game.

// Creating a class has multiple calculator methods

// The add method takes an indefinite numbers of arguments bundled together in an array called num and adds them in a sum variable and then returns it
class Calculator {
  // Send as many numbers to add them up
  add(...nums) {
    let sum = 0;
    nums.forEach((value) => {
      sum += value;
    });
    return sum;
  }

  //Send two numbers to substract them
  substract(num1, num2) {
    return num1 - num2;
  }
}

const calc = new Calculator();
console.log("Sum", calc.add(5, 5, 6));
console.log("Substract", calc.substract(15, 5));

// ! Explanation for the add method
// The ...num in the add method of the Calculator class is using a feature in JavaScript called "rest parameters." It allows you to pass an indefinite number of arguments to the function, and those arguments get bundled into an array. Here's a simple breakdown:

// The Calculator class has a method add.
// The add method uses ...num to accept multiple arguments.
// Inside the add method, num is treated like an array.
// The forEach loop goes through each value in the num array, adding them to sum.
// Finally, sum is returned, which is the total of all the values passed.
// Analogy: Think of ...num as a shopping bag. You can put as many items (numbers) as you want in it. Inside the add method, you take out each item (number) one by one, and add their price (value) to your total bill (sum).

// !--------------------------------------------

// !Submission:
// For each task, provide the written code along with comments explaining what each part of the code does. For the creative challenge, include a brief explanation of how the different functions work together.
