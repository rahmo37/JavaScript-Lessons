// *Assignment12:
// ?related to w3schools BigInt

// !Assignment 1: Understanding JavaScript Number Precision
// ?Objective: Demonstrate the precision limit of JavaScript numbers.

// ?Task: Write a JavaScript program that declares two variables: a with the value 999999999999999 and b with the value 9999999999999999. Print both values to the console and explain why they might not appear as expected.

// In JavaScript, all numbers are stored in a 64-bit floating-point format (IEEE 754 standard).

// With this standard, large integer cannot be exactly represented and will be rounded.

// Because of this, JavaScript can only safely represent integers:

// Up to 9007199254740991 and -9007199254740991

let a = 999999999999999;
let b = 9999999999999999; // Outputs 10000000000000000

console.log(a, b);

// a is set to 999999999999999, which is within the safe integer range. It should be displayed accurately when printed.
// b is set to 9999999999999999, which exceeds the safe integer range. Due to the loss of precision for numbers beyond this range, b might not be printed as exactly 9999999999999999. It is likely to be rounded to a number that can be represented within the limitations of the floating-point format used by JavaScript.

// !Assignment 2: Introduction to BigInt
// ?Objective: Learn how to create and use BigInt in JavaScript.

// ?Task: Create two BigInt numbers: one by appending n to an integer and another by using the BigInt() function. Assign them to variables and print their types using typeof to verify they are recognized as bigint.

// To create a BigInt, append n to the end of an integer or call BigInt()

a = 1234567890123456789012345n;
b = BigInt(1234567890123456789012345n);

// when using the BigInt constructor in JavaScript to create a BigInt value, if you are passing a numeric literal directly to the constructor, you still need to use the n suffix to indicate that it is a BigInt literal. However, if you're passing a string representation of the number to the BigInt constructor, the n suffix is not used. The n suffix is specifically for numeric literals to differentiate them from regular numbers, as BigInt and regular numbers (Number) are different types in JavaScript.

// For example,
let c = BigInt("1234567890123456789012345");

// Now lets console log the variables

console.log(a, b, c);
// Printed them precisely

// Lets check their types
console.log(typeof c); // BigInt

// !Assignment 3: BigInt Arithmetic
// ?Objective: Understand the arithmetic operations possible with BigInt and their limitations.

// Operators that can be used in the regular numbers can also be used on a BigInt

// ?Task: Perform addition, subtraction, multiplication, and division with BigInt numbers. Try to mix BigInt and regular numbers in an operation and document what happens.

console.log("BigInt addition", a, "+", b, ":", a + b);
console.log("BigInt multiplication", a, "*", b, ":", a * b);
console.log("BigInt division", a, "/", b, ":", a / b);
console.log("BigInt substraction", a, "-", b, ":", a - b);

// Now lets try to add a bigInt number with a regular number
c = 45;
// console.log(a + c); //Throws an error cannot mix BigInt and different types

// !Assignment 4: Exploring Safe Integers
// ?Objective: Investigate the concept of safe integers in JavaScript.

// In JavaScript, Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER are constants that represent the maximum and minimum safe integer values in the JavaScript environment, respectively. These values define the range of integers that can be precisely represented in JavaScript, which is important because JavaScript uses double-precision 64-bit binary format (IEEE 754) for numbers, limiting the precision with which very large integers can be represented.

// Number.MAX_SAFE_INTEGER
// Value:
// 2^53 − 1 which is 9007199254740991.
// Explanation: Number.MAX_SAFE_INTEGER represents the largest integer that can be accurately represented in JavaScript. The safe part of Number.MAX_SAFE_INTEGER means that every integer up to this value (including the value itself) can be represented precisely and can be operated on safely within the confines of JavaScript's number precision. Adding 1 to Number.MAX_SAFE_INTEGER results in a value that cannot be precisely represented, leading to potential precision loss.
// Number.MIN_SAFE_INTEGER
// Value: −(2^53 −1), which is -9007199254740991.
// Explanation: This is the smallest integer value that can be accurately represented in JavaScript. Similar to the max safe integer, operations within this range are safe from precision loss, but values beyond this range can result in inaccuracies.
// These constants are particularly useful when working with high-precision arithmetic or when dealing with very large datasets that require integer calculations.

// ?Task: Write a JavaScript program that finds the maximum and minimum safe integers (Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER) and prints them to the console. Demonstrate a case where two numbers are considered equal due to precision loss.

a = Number.MAX_SAFE_INTEGER;
b = Number.MIN_SAFE_INTEGER;

// They are outputting true but they are not equal. Which means they lost their precision. So beyond the boundary of the safe integer we should not add any value
console.log(a + 1 === a + 2); // outputs true

// !Assignment 5: Validating Integers and Safe Integers
// ?Objective: Use ES6 methods to check if a number is an integer and if it's a safe integer.

// Number.isInteger() and Number.isSafeInteger() are methods in JavaScript that belong to the Number object. They are used to determine whether the value provided is an integer and whether it's a safe integer, respectively.

// ?Task: Use Number.isInteger() and Number.isSafeInteger() to check several numbers, including large numbers, decimal numbers, and safe integers. Document each case with comments explaining the result.

// This method determines if the value passed is an integer. An integer is a number without any fractional part. It can be positive, negative, or zero, but it cannot have a decimal point. Returns Boolean

Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(0.1); // false
Number.isInteger("10"); // false
Number.isInteger(true); // false
Number.isInteger(null); // false
Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false

// Number.isInteger() and Number.isSafeInteger() are methods in JavaScript that belong to the Number object. They are used to determine whether the value provided is an integer and whether it's a safe integer, respectively.

// Here's a brief explanation of each:

// Number.isInteger()
// This method determines if the value passed is an integer. An integer is a number without any fractional part. It can be positive, negative, or zero, but it cannot have a decimal point.

console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(-100000)); // true
console.log(Number.isInteger(0.1)); // false
console.log(Number.isInteger("10")); // false
console.log(Number.isInteger(true)); // false
console.log(Number.isInteger(null)); // false
console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger(-Infinity)); // false

// Number.isSafeInteger()
// This method determines if the value passed is a "safe integer". A safe integer is an integer that can be exactly represented as a double-precision number (following the IEEE 754 standard). In JavaScript, the range of safe integers is between -(2^53 - 1) and 2^53 - 1.

// Numbers outside this range can lose precision when represented in JavaScript, which can lead to inaccuracies in calculations. Therefore, Number.isSafeInteger() can be used to check whether a number falls within this safe range and can be used reliably in calculations that require precision.

console.log(Number.isSafeInteger(3)); // True
console.log(Number.isSafeInteger(Math.pow(2, 53))); // false, it's 1 more than a safe integer
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1)); // true, it's the largest safe integer
console.log(Number.isSafeInteger(NaN)); // false
console.log(Number.isSafeInteger(Infinity)); //false
console.log(Number.isSafeInteger("10")); // false;
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true, because it's equivalent to 3

// !Comprehensive Assignment: BigInt and Number Precision Project
// ?Objective: Combine knowledge of BigInt, JavaScript Number precision, and safe integers to solve a real-world problem.

// ?Task: Imagine a scenario where you have to calculate the total population of the world accurately, given the population numbers of all countries in an array. Some populations are extremely large, making this a perfect use case for BigInt.

// ?Write a function that accepts an array of country populations (as strings to avoid precision loss). Some numbers will be regular JavaScript numbers, while others should be converted to BigInt.
// ?The function should accurately calculate the total world population.
// ?Ensure your function accounts for the limitations of mixing BigInts with Numbers.
// ?Bonus: Include functionality to identify if the calculated total is a safe integer.

// By default sends a get request. The fetchData function is an asynchornous function
const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/population");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    let popArr = JSON.parse(data);
    return popArr;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData().then(function (data) {
  console.log(countTotalPopulation(data));
});

function countTotalPopulation(popArr) {
  let totalPopulation = 0n;
  for (let eachCountry of popArr) {
    let population = eachCountry[2];
    totalPopulation += BigInt(population);
  }
  return totalPopulation;
}

// Explain everything to move forward
