// ?related to JS Foundation folder, numbers.js and w3schools numbers

// !Assignment 1: Understanding JavaScript Numbers
// ?Basic Numbers: Create two variables, one with a decimal value and another without. Print both values to the console.

let x = 5;
let y = 3.3;
console.log(x);
console.log(y);

// ?Scientific Notation: Write a program that demonstrates the use of scientific notation in JavaScript. Define two variables, one representing a very large number and another a very small number, using scientific notation. Print the results.

// 6 0s after 123
x = 123e6;
console.log(x);

// 5 places after the decimal including 123 at the end
y = 123e-5;
console.log(y);

// ?Integer Precision: Investigate integer precision in JavaScript. Create a variable with a number that has more than 15 digits. Print it to see how JavaScript handles it. Then, create another variable with exactly 15 digits and print it. Compare the outputs.

// 20 digits
x = 123456789987654321.12;
console.log(x); // Upto 18 digits were kept and rest rounded up

// 15 digits
y = 123456789123456;
console.log(y); // all the values are kept

// ?Floating Point Arithmetic: Demonstrate floating point arithmetic issues by adding 0.2 and 0.1 in JavaScript. Print the result. Then, correct the issue using multiplication and division, and print the corrected result.

x = 0.1 + 0.2;
console.log(x); // This weired number is created 0.30000000000000004
// This happens due to how computers handle floating-point arithmetic. In JavaScript, numbers are stored in a format called binary floating-point (specifically, the IEEE 754 standard). When you add 0.1 and 0.2, the binary representations of these numbers don't result in an exact 0.3 but something slightly off, hence 0.30000000000000004. This is a common issue in many programming languages, not just JavaScript, related to the way floating-point numbers are represented in binary.

// to fix this we use the follwoing formula
y = (0.1 * 10 + 0.2 * 10) / 10;
console.log(y); //0.3

// ?Adding Numbers and Strings: Show the difference between adding numbers and strings. Create four examples: adding numbers, adding strings, adding a number to a string, and adding a string to a number. Print the results to understand JavaScript's behavior in each case.

// adding numbers
console.log(2 + 2); // 4

// adding strings
console.log("2" + "2"); // "22"

// adding number and a srting
console.log(2 + "2"); // "22"

// adding string and a number
console.log("2" + 2); // 22

// !Assignment 2: Working with Numeric Strings and Special Numbers
// ?Numeric Strings Operations: Demonstrate how JavaScript handles numeric strings in arithmetic operations. Create examples with division, multiplication, and subtraction where one of the operands is a numeric string. Explain the results.

// When the + operator is used the numaric strings are not translated as the numbers for example,

// number with string
x = 5 + "5";
console.log(x); // 55, but expected 10

// strings with number
x = "5" + 5;
console.log(x); // Still 55, but expected 10

// To fix this we have to explicitly convert the string to a number, or we can add a + symbol infront of the string

// for example
x = +"5" + 5;
console.log(x);

// or
x = Number("5") + 5;
console.log(x);

// However the rules for the * / - are different, we can directly apply them and JS will apply them correctly
x = "5" - 5;
console.log(x); // Expected 0 // Outputs 0

x = "5" * 5;
console.log(x); // Expected 25 // Outputs 25

x = "5" / 5;
console.log(x); // Expected 1 // Outputs 1

// ?NaN Exploration: Write a function that takes two parameters, performs division, and then checks if the result is NaN. Use this function with both numeric and non-numeric strings as inputs. Print "Invalid Operation" if the result is NaN, otherwise print the result.

function divideNumbers(num1, num2) {
  return isNaN(num1 / num2) ? "Invalid Operation" : num1 / num2;
}

console.log(divideNumbers(2, "Hi"));

// ?Infinity and Beyond: Create a loop that multiplies a number by itself until it reaches Infinity. Print the iteration count when it reaches Infinity. Additionally, demonstrate division by zero and print the results.

x = 5;
let i = 0;
while (isFinite(x)) {
  console.log(x);
  x *= x;
  console.log(x);
  i++;
}
console.log(i);

// Prints infinity
console.log(y / 0);

// Hexadecimals and Bases: Define a hexadecimal number. Then, convert and print this number in decimal, binary, octal, and hexadecimal formats using the toString method.

let hexNum = 0xea;

// Printing a hexa number automatical prints its corresponding decimal number
console.log(hexNum);

// Lets convert this hex to their corresponding binary, decimal, octal
console.log(hexNum.toString(2)); //Binary
console.log(hexNum.toString(10)); // Decimal
console.log(hexNum.toString(8)); // Octal

// !Assignment 3: Numbers as Objects and a Comprehensive Exercise
// ?Numbers as Objects: Create a number using the Number object and another as a primitive type. Compare them using both == and ===. Discuss the results in comments in your code.

let numberObject = new Number(25);
let primitiveNumber = 25;

console.log(numberObject == primitiveNumber); // True
console.log(numberObject === primitiveNumber); // False

// The == loose operator checks both of the variables with out cheking the types, however the === strict operator also chekcs for the type as well, since the variable named numberObject is a type of Object. it returns false

// -------------

// ?Comprehensive Challenge: Create a complex calculator that handles the following scenarios and prints the results:

// ?Adding, subtracting, multiplying, and dividing numeric strings and numbers.
// ?Correcting a floating point arithmetic issue.
// ?Concatenating numbers and strings in various orders to achieve specific outputs (e.g., "The result is 30", "3030").
// ?Using a hexadecimal number in calculations and converting it to different bases.
// ?Checking for NaN and Infinity in operations and handling them gracefully.
// ?Demonstrate the use of numbers as objects and their impact on equality checks.

// Calculator's logic will be implemented here
// Selects all button elements within the container with the class "buttons" and then converts the NodeList to an array using Array.from(). Now, buttonsArray is an array containing all the button elements.

// *Variables and their initialization
const display = document.querySelector(".display");
const regularButtonsArray = Array.from(
  document.querySelectorAll(".buttons .regularOperators button")
);

const otherButtonsArray = Array.from(
  document.querySelectorAll(".otherOperators")
);

const [clearButton, hexButton, binButton, octButton, equalButton] =
  otherButtonsArray;
let isClicked = false;
let hexMode = false;

// *Event Listeners
function addEvents() {
  regularButtonsArray.forEach((element) => {
    element.addEventListener("click", (event) => {
      if (!isClicked) {
        display.innerHTML = "";
        isClicked = true;
      }
      display.innerHTML += element.innerHTML.replace(/[^0-9.]/, (symbol) => {
        return " " + symbol + " ";
      });
    });
  });
  clearButton.addEventListener("click", (event) => {
    display.innerHTML = "0";
    isClicked = false;
  });
}
addEvents();

// !Lets learn a bit about the eval() function
// The eval() function in JavaScript is a global function used to evaluate JavaScript code represented as a string. However, it does not have "attributes" in the sense that methods or objects might have properties. Instead, you can think of it more in terms of its behavior and usage:

// Basic Usage
// Syntax: eval(string)
// Purpose: Executes the JavaScript code contained within the string argument.
// Return Value: Returns the result of the evaluated code.
// Examples
// Evaluating Mathematical Expressions

// let result = eval('10 + 5');
// console.log(result); // 15
// Executing Multiple Statements
// If the string represents expressions, the last expression is returned.

// let value = eval('let a = 5; a * 2;');
// console.log(value); // 10
// Accessing Variables
// eval() can access local and global variables.

// let a = 20;
// console.log(eval('a + 5')); // 25
// Security Considerations
// Code Injection: Since eval() can execute any JavaScript code, malicious code can be injected if the string input is not controlled or sanitized, leading to potential security vulnerabilities.
// Performance: Using eval() can lead to slower code execution compared to using other alternatives because the JavaScript engine cannot optimize the code inside eval() as effectively.

// Now lets handle the calculation
equalButton.addEventListener("click", (event) => {
  let expression = display.innerHTML;
  isClicked = false;
  if (checkForUnexpectedSyntax(expression)) {
    try {
      display.innerHTML = eval(expression);
    } catch (err) {
      display.innerHTML = "Invalid Syntax";
    }
  } else {
    display.innerHTML = "Invalid Syntax";
  }
});

hexButton.addEventListener("click", (event) => {
  let expression = display.innerHTML;
  isClicked = false;
  console.log(expression);
  if (expression === "0" || expression === "Invalid Syntax") {
    display.innerHTML = "0x";
    isClicked = true;
  } else {
    if (checkForUnexpectedSyntax(expression)) {
      try {
        display.innerHTML = eval(expression).toString(16) + " (h)";
      } catch (err) {
        display.innerHTML = "Invalid Syntax";
      }
    } else {
      display.innerHTML = "Invalid Syntax";
    }
  }
});

binButton.addEventListener("click", (event) => {
  let expression = display.innerHTML;
  isClicked = false;
  console.log(expression);
  if (expression === "0" || expression === "Invalid Syntax") {
    display.innerHTML = "0b";
    isClicked = true;
  } else {
    if (checkForUnexpectedSyntax(expression)) {
      try {
        display.innerHTML = eval(expression).toString(2) + " (b)";
      } catch (err) {
        display.innerHTML = "Invalid Syntax";
      }
    } else {
      display.innerHTML = "Invalid Syntax";
    }
  }
});

octButton.addEventListener("click", (event) => {
  let expression = display.innerHTML;
  isClicked = false;
  console.log(expression);
  if (expression === "0" || expression === "Invalid Syntax") {
    display.innerHTML = "0o";
    isClicked = true;
  } else {
    if (checkForUnexpectedSyntax(expression)) {
      try {
        display.innerHTML = eval(expression).toString(8) + " (o)";
      } catch (err) {
        display.innerHTML = "Invalid Syntax";
      }
    } else {
      display.innerHTML = "Invalid Syntax";
    }
  }
});

function checkForUnexpectedSyntax(expression) {
  let operators = ["/", "+", "-", "*", "."];
  // \s+ matches one or more whitespace characters (including spaces, tabs, and line breaks). If you only want to target spaces and not other whitespace characters, you could use a space instead of \s.
  // g is the global flag, ensuring that all instances of the whitespace are replaced, not just the first one.
  eachChar = expression.replace(/\s+/g, "").split("");

  for (let i = 0; i < eachChar.length; i++) {
    if (operators.includes(eachChar[0]) && eachChar[0] !== "-") {
      return false;
    }
    if (operators.includes(eachChar[i])) {
      if (operators.includes(eachChar[i + 1])) {
        return false;
      }
    }
  }
  return true;
}
