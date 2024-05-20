// *Assignment13:
// ?related to JS Foundation folder, numberMethod.js and JS numberMethod in w3Schools

// !Assignment 1: Exploring Number Methods
// ?toString() Usage:

// ?Create a function that takes a number as input and returns it as a string.
// ?Ensure your function handles both integer and floating-point numbers.
// ?Bonus: Format a given number to represent currency (e.g., 1234567.89 → "1,234,567.89").

function convertToString(number) {
  // toLocaleString method formats dates and numbers to the specified region, you can pass language tags such as en-US along with different attributes such as style, currency etc
  number = number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return `"` + number + `"`;
}

console.log(convertToString(55555555555.5555555));

// Exponential Representation:

// ?Write a script that converts numbers into their exponential form for numbers greater than 10,000 and displays them in the console.

// ?Include examples with different numbers of characters behind the decimal point.

function convertoToExponentialNotation(number, numberOfChars) {
  if (number > 10000) {
    return number.toExponential(numberOfChars);
  } else {
    return "The number is not greater than 10000";
  }
}

console.log(convertoToExponentialNotation(10000.18, 1));

// ?Precision with toFixed():
// ?Develop a simple interest calculator using toFixed(). It should input principal, rate, and time, then output the interest earned with exactly two decimal places.

// Principal: This is the original amount of money you lend, invest or borrow. for example you lend 100$ to your friend

// Rate: This tells you how much extra as percentage someone will give you or you'll owe using this money. If your friend says that they'll give you 5% extra, the rate is 5%

// Time: This is how long the money is lent, invested, or borrowed for. If your friend keeps your $100 for a year, the time is 1 year.

function interestCalculator(principal, rate, time) {
  let percent = rate / 100;
  let interest = Number((principal * percent * time).toFixed(2));
  return (
    "Your interest rate for $" +
    principal +
    " for " +
    time +
    " Year(s) at a rate of " +
    rate +
    "% is: $" +
    interest.toPrecision(2)
  );
}
console.log(interestCalculator(70333, 5, 3));

// ?Using toPrecision() for Measurement:

// ?Create a function that takes a measurement (in meters) and converts it into a more precise string representation based on the length. For example, a very small measurement should be very precise.

// toPrecision method helps you with this by formatting a number to a specified length. This length includes digits before and after the decimal point
// For example,
// let num = 123.456;
// console.log(num.toPrecision(3)); // "123"
// console.log(num.toPrecision(5)); // "123.46"

function heightCalculatorInFoot(heigthInMeter) {
  const conversionNumber = 3.28084;
  let heigthInFoot = conversionNumber * heigthInMeter;
  return heigthInFoot.toPrecision(2) + " ft";
}
console.log(heightCalculatorInFoot(1.78));

// ?Extracting Raw Value:

// ?Demonstrate the use of valueOf() with a custom Number object. Show how it differs from simply using a primitive value.

// All JavaScript data types have a valueOf() and a toString() method.
// ValueOf method returns the primitve value of a specified object

let x = new Number(5);
console.log(x.valueOf());

x = 5;
console.log(x);

// We need to explicitly use the valueOf() method to to extract out the value from a number object howwever when using the primitive number we do not need to use the value of method just printing the variable directly will provide the value

// !Assignment 2: Global Methods and Number Conversion
// ?Number Conversions:

// ?Write a script that takes various inputs (Boolean, strings, dates) and uses the Number() method to convert them into numbers. Discuss the output received for each type of input.

// Lets understand this `
console.log(Number(Date())); // Outputs NaN because returning a String
console.log(Number(new Date())); // Outputs corresponding millisecond because returning a Date Object

// Converts an input to its numeric form, if results in NaN -1 is returned
function returnCorrespondingNumber(input) {
  if (isNaN(Number(input))) {
    return -1;
  } else {
    return Number(input);
  }
}

console.log(returnCorrespondingNumber(new Date()));

// ?Date to Milliseconds:

// ?Utilize Number(new Date()) to find out how many milliseconds have passed since your birthdate until now.

console.log(
  "Days lived from birth: " +
    convertMillisecondsToDays(new Date() - new Date("09-13-1995"))
);

function convertMillisecondsToDays(milliseconds) {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  return Math.floor(milliseconds / millisecondsPerDay);
}

// Parsing Integers and Floats:

// !Lesson,
// parseInt takes a string and converts it into an integer. For example, if you have the string "123", parseInt will give you the number 123. If the string starts with numbers followed by characters, like "123abc", parseInt will return 123, ignoring the rest. If the string doesn't start with a number, it returns NaN, which stands for "Not a Number".

// javascript
// Copy code
// parseInt("123");      // returns 123
// parseInt("123abc");   // returns 123
// parseInt("abc123");   // returns NaN

// parseFloat also takes a string but converts it into a floating-point number (or a decimal number). So, if you use parseFloat on "123.456", it will return 123.456. Just like parseInt, it stops reading the string once it hits a non-numeric character after reading any numbers.

// javascript
// Copy code
// parseFloat("123.456");    // returns 123.456
// parseFloat("123.456abc"); // returns 123.456
// parseFloat("abc123.456"); // returns NaN
// Both functions are handy for converting strings to numbers, especially when dealing with user inputs which are often received as strings.

// Given a mixed string of letters and numbers, extract and convert the numeric parts into integers and floating-point numbers using parseInt() and parseFloat().
// Challenge: Extract numbers from a complex string (e.g., "The temperature is 30.5 degrees at 10 AM") and perform arithmetic operations with them.

let st = "The temperature is 30.5 degrees at 10 AM";

extractNumbers(st).forEach((element) => {
  // Each number is printed using for each
  console.log(element);
});

function extractNumbers(st) {
  // First making an array of words splitting each words
  wordArray = st.split(" ");

  // Filtering only numbers and saving it to a numbers array
  let numbers = wordArray.filter((element) => {
    // if the element is a number, we return the string representaion of it
    return parseFloat(element);
  });

  // Each number is then again parsed with praseFloat to make it number from string
  return numbers.map((element) => {
    return parseFloat(element);
  });
}

// !Assignment 3: Deep Dive into Number Properties
// ?Research and present examples of using Number.MAX_VALUE, Number.MIN_VALUE, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, and Number.NaN.
// ?For each property, provide a practical use case where such a value might be encountered or utilized in a program.

// Number.MAX_VALUE is a constant representing the largest possible numeric value that JavaScript can handle. This value is approximately
// 1.7976931348623157 × 10^308
//  . If a calculation in JavaScript exceeds this value, it might be considered Infinity.
// For example, if you multiply Number.MAX_VALUE by 2, the result will be Infinity because it exceeds the maximum value JavaScript can represent.
console.log(Number.MAX_VALUE);

// In JavaScript, Number.MIN_VALUE represents the smallest positive numeric value that JavaScript can handle, which is closer to zero, not the most negative number. This value is approximately 5 × 10 ^− 324
//  . It's important because it's the closest to zero you can get without being zero in JavaScript calculations.  

// Number.MIN_VALUE does not represent the smallest or most negative number, but rather the smallest positive number greater than zero that JavaScript can represent. It's about 
// 5 × 10^−324
// . This value is important because it shows the limit at which a number in JavaScript is considered greater than zero, rather than being rounded down to zero.

console.log(Number.MIN_VALUE);

// In JavaScript, Number.POSITIVE_INFINITY is a special value that represents infinity. It’s used when a number exceeds the maximum limit (Number.MAX_VALUE) or results from a division by zero in calculations.

// For example, if you divide any positive number by zero in JavaScript, the result will be Number.POSITIVE_INFINITY. Also, if you keep multiplying a large number and exceed the JavaScript's maximum number capacity, the result turns into Number.POSITIVE_INFINITY.

console.log(Number.POSITIVE_INFINITY);
console.log(1 / 0);

// In JavaScript, Number.NEGATIVE_INFINITY represents negative infinity. It's similar to Number.POSITIVE_INFINITY but on the negative side of the number scale. This value is used when calculations fall below the minimum limit or result from a negative number divided by zero.

// For example, if you divide a negative number by zero in JavaScript, the result will be Number.NEGATIVE_INFINITY. Also, performing calculations that continue to decrease past JavaScript’s minimum representable value (like multiplying negative values beyond the number's capacity) results in Number.NEGATIVE_INFINITY.

console.log(Number.NEGATIVE_INFINITY);
console.log(-1 / 0);

// !Comprehensive Project: A Simple E-commerce Checkout System
// Combine all you've learned to create a simple front-end and back-end project:

// Front-end:

// Design a webpage where users can input product prices, quantities, and view the total cost. Use toFixed() to format the total cost.
// Implement a feature where users can see prices in exponential notation if they exceed a certain amount, utilizing toExponential().


// Back-end:

// Create a simple server that can receive product details, calculate the total cost, and return it to the front-end.
// Use parseInt() and parseFloat() to ensure you're working with numbers.
// Incorporate a feature to log transaction dates, using Number(new Date()) to timestamp transactions.
// Integration:

// Ensure that the front-end and back-end can communicate effectively, with the front-end displaying the calculated cost and transaction timestamp returned by the back-end.
