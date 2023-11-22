// Comparison operators are used in logical statements to determine the equality or difference between variables or values

// We use the == operator to check if two values are equal
// Important to note that The == comparison operator checks if only the value is equal or not

// for example
let x = 5;
console.log(x == 8); // false
console.log(x == 5); // This will return true
// now check this one out
console.log(x == "5"); // This will also return true, Why?
// Because the == operator only checks the value not the type

// lets experiment this,
let test = "false";
console.log(test == false);
// This returns false because,
//The boolean false will be converted to the number 0.
// Then, the string "false" will be attempted to be converted to a number, which results in NaN.
// Finally, the comparison of NaN to 0 will return false.
// the ==, also known as loose equality is a but tricky, its better to avoid using this in complex comparison

// On the other hand triple equal is much more straight forward
// for example,
console.log(x === 5); // true
console.log(x === 8); // false
console.log(x === "5"); // false
// returns true only if both the type and the value matches

// != means not equal, if an expression returns true, the whole statement is false
// lets demonstrate it

if (x != 5) {
  // This example, the statement is saying, if x is not equal to 5, then i will run the code
  console.log("x is not 5");
} else if (x == 5) {
  console.log("x is equal to 5");
}

// similarly we have !== operator, which checks both type and value
// for example
x = 7;
if (x !== 7) {
  console.log(
    "Either type or the value did not match, that is why i am executing"
  );
} else if (x === 7) {
  console.log("Both type and value matched");
}

// Then we have greater then. >, if x is greater then specified number then the expression is true
console.log(x > 5);

// similarly we have less than, <
console.log(x < 10);

// Greater then or equal to, >=
// If a value is greater than or equal to, the specified value the expression returns true
console.log(x >= 7);

// Similarly we have less than or equal to, <=
console.log(x <= 7);

// We have some logical operators
// first we have &&, which evaluates to and,
// Basically it evaluates two or more exressions, if all the expressions returns true the code block will be executed
if (x < 10 && x > 5) {
  console.log("x is between 6 to 9");
}

// We have or logical operator, meaning if one of the expression is true the code block will be executed
if (x > 10 || x === 7) {
  console.log("x is either equal to 7 or it is greater than 10");
}

// then we have the NOT (!) operator, this one is a bit tricky. if the expression is false the whole statement is true, and if the expression is true the whole statement is false, lets see example

if (!(x > 10)) {
  console.log("I ran the code block because the x is NOT greater then 10");
}
// will return true because, the statement is saying if x greater then 10 is true, then i will not execute the code, but if x greater then 10 is false, then i will execute the code block

// We have ternary operator syntax, which is kind of a shortcut of if condition
x = 10;
result =
  x > 5 && x < 10 && x === 7
    ? "X is greater than 5 less than 10 and its equal to 7"
    : "X is either not greater than 5 or not less then 10 or maybe not equal to 7, the expression evaluated to false, thats why i am runnning";
console.log(result);

// you can even do nested statement with ternary operator
// Lets Imagine a senario where we have an emplyee, now we want to give him a bonus, but to get that bonus he has to earn over 40,000 ,If that is met then we check if he has over 5 years of experience, otherwise he will not get the bonus.
// lets evaluate it with ternary operator
const employee = {
  name: "Mohammad Rahim",
  experenece: 6,
  currentSalary: 42000,
};
let bonusStatus =
  employee["currentSalary"] > 35000
    ? employee["experenece"] > 5
      ? "You got the bonus! :D"
      : "Not enough experience :("
    : "Current Salary is not high enougth :(";

console.log(bonusStatus);

//! Comparing different types

// *Comaparing number and numaric strings
console.log(2 < "12");
// In this case string 12 will be converted to number 12. Later it will be compared to 2

//* Comparing a regular string with a number
console.log(2 < "John");
// To make this syntax logical, JS will try to convert the string "John" to a number, but converting Jhon to a number is illogical, thus Jhon is converted to NaN.
// Now any ralational comparison with NaN is always false, therefore 2 < "John" will result in false
// Same will happen for, 2 == "John", 2 > "John"

//* Comparing one numeric string with another numeric string
console.log("2" > "12"); // returns false
// because when comparing to numeric string, they are compared alphabetically, meaning 2 is bigger than 1 (in the 12), This way

// When taking input from a user, it is better to convert that string to a propertype before any comparison. Because if the input is not in its intended form, calculation will fail.
// To convert an input to any Data type we want we have the corresponding type methods, such as Number(), Boolean(), String()..etc

let age = 12;
age = Number(age);

if (isNaN(age)) {
  console.log("the input is not a number");
} else {
  console.log(age < 18 ? "Too young" : "Old enough");
}
